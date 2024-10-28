const express = require('express');
const { chromium } = require('playwright');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');
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
    await page.goto(url,{
      timeout: 20000,
      waitUntil: 'networkidle',
    });
    
    //await page.waitForTimeout(20000);

    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 2 seconds to ensure all content loads
    });

    const contentSize = await page.evaluate(() => {
      return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      };
    });

    await page.setViewportSize({
      width: contentSize.width,
      height: contentSize.height,
    });

    
    // Take screenshot and save it
    const screenshotPath = path.join(__dirname, `screenshot-${Date.now()}.png`);
    await page.screenshot({ 
      path: screenshotPath, fullPage: true 
    });

    await browser.close();

    // Send screenshot file as response
    res.sendFile(screenshotPath, (err) => {
      if (err) {
        console.error('Error sending file:', err);  // Log error if sending fails
        res.status(500).send({ error: 'Failed to send screenshot' });
      } else {
        // After successfully sending the screenshot, delete the file
        fs.unlink(screenshotPath, (deleteErr) => {
          if (deleteErr) {
            console.error('Error deleting screenshot:', deleteErr);
          } else {
            console.log('Screenshot deleted successfully');
          }
        });
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
