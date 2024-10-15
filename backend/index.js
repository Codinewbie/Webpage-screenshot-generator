const express = require('express');
const { chromium } = require('playwright');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to take a screenshot
app.post('/screenshot', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Launch Microsoft Edge (Chromium-based)
    const browser = await chromium.launch({
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',  // Adjust the path for your system
    });
    
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle', 
      timeout : 10000, // Wait for the full page load (can also use 'networkidle' or 'domcontentloaded')
    });
    
    await page.waitForTimeout(10000);
    // Take screenshot and save it
    const screenshotPath = `screenshot-${Date.now()}.png`;
    await page.screenshot({ path: screenshotPath,fullPage: true  });

    await browser.close();

    // Send screenshot file as response
    res.sendFile(__dirname + `/${screenshotPath}`, (err) => {
      if (err) {
        console.error('Error sending file:', err);  // Log error if sending fails
        res.status(500).send({ error: 'Failed to send screenshot' });
      }
    });

  } catch (error) {
    console.error('Error capturing screenshot:', error);  // Log any errors that occur
    res.status(500).json({ error: 'Error capturing screenshot', details: error.message });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
