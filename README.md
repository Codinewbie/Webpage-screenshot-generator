# Webpage Screenshot Generator

A modern web application that allows users to capture full-page or single-page screenshots of any website. This tool supports multiple formats (PNG, JPG, PDF) and offers a smooth user experience with a responsive design. Built using React for the frontend and Node.js with Playwright for the backend, it ensures fast and efficient rendering.
🌐 **[Live Demo](https://webpage-screenshot-generator.vercel.app/)**
## 📌 Features

1. **Screenshot Capture:** Capture full-page or single-page screenshots by entering any URL.
2. **Multiple Formats:** Download screenshots in **3 formats**: PNG, JPG, or PDF.
3. **Clipboard Copy:** "Copy Image" button to copy screenshots directly to the clipboard, even after scrolling.
4. **Responsive Design:** Optimized for desktops, tablets, and mobile devices.
5. **Download Button:** Instant download option for all captured screenshots.

## 🚀 Technologies Used

### **Frontend**
- React
- JavaScript / TypeScript
- Tailwind CSS (for responsive styling)
- Vite (for fast builds and development)

### **Backend**
- Node.js
- Express.js
- Playwright (for automated browser interactions)

## 🛠️ Getting Started

### Prerequisites
- Node.js (v14 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/webpage-screenshot-generator.git
   cd webpage-screenshot-generator

2. **Install Dependencies**
   ```bash
   npm install
   
3. **Run the Application**
   - For Development
     
        ```bash
        npm run dev
   
    - For Production:
         ```bash
         npm run build
         npm start

4. Access the Application:
    - Open your browser and visit:
      ```bash
      http://localhost:3000
## 📄 API Endpoints

### `POST /screenshot`

Captures a screenshot based on the provided URL and format.

- Request Body:
   ```bash
   {
     "url": "https://example.com",
     "format": "png" // Options: 'png', 'jpg', 'pdf'
   }

- Request Body:
  - Returns the screenshot as a downloadable file.
