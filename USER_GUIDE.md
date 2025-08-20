# Adah Accounting - User Operation Guide

## Overview
Adah Accounting is an AI-powered accounting system that automates invoice processing, generates journal entries, provides financial reports, and includes an AI assistant for financial queries.

## Getting Started

### 1. Starting the Application
```bash
npm run dev
```
The application will run on http://localhost:8000

### 2. Navigation
The application features a sidebar with the following sections:
- **Dashboard**: Overview and financial metrics
- **Invoice Processing**: AI-powered invoice upload and OCR
- **Journal Entries**: Smart automated journal entries
- **Ask Adah**: AI assistant for financial queries
- **Financial Reports**: Comprehensive financial analysis

## How to Use Each Feature

### Dashboard
- View key financial metrics (Revenue, Expenses, Net Profit, Invoices Processed)
- Quick access buttons to main features
- Financial overview cards with growth indicators

### Invoice Processing
1. **Upload Invoices**:
   - Click "Invoice Processing" in the sidebar
   - Use the drag-and-drop area or click to select files
   - Supported formats: PNG, JPG, JPEG, GIF, SVG, TIFF, PDF
   - The system uses OCR (Tesseract.js) to extract data automatically

2. **Bulk Processing**:
   - Upload multiple invoices at once
   - Real-time processing status updates
   - View extracted data for each invoice

### Journal Entries
- View automatically generated journal entries
- Entries are created based on processed invoice data
- Follow standard accounting rules and practices

### Ask Adah (AI Assistant)
1. **Starting a Conversation**:
   - Click "Ask Adah" in the sidebar
   - Type financial questions in the chat interface
   - Get instant AI-powered responses

2. **Suggested Queries**:
   - "What's my current cash flow status?"
   - "Show me expenses over $1,000 this month"
   - Custom financial analysis questions

### Financial Reports
1. **Viewing Reports**:
   - Access comprehensive financial analysis
   - Multiple report types: Overview, Profit & Loss, Balance Sheet, Cash Flow, Financial Ratios
   - Real-time data updates

2. **Exporting Reports**:
   - Export to PDF or Excel format
   - Select different time periods
   - Detailed breakdowns by category

## Key Features

### AI-Powered OCR
- Automatic data extraction from invoices
- High accuracy text recognition
- Support for various document formats

### Smart Analytics
- Real-time financial metrics
- Growth indicators and trends
- Automated calculations

### Modern Interface
- Clean, responsive design
- Intuitive navigation
- Mobile-friendly layout

## Technical Requirements
- Node.js environment
- Modern web browser
- Internet connection for AI features

## Troubleshooting

### Common Issues
1. **Port 8000 in use**: Run `fuser -k 8000/tcp` to free the port
2. **OCR not working**: Ensure uploaded files are clear and readable
3. **Slow processing**: Large files may take longer to process

### Support
- Check console logs for error messages
- Ensure all dependencies are installed with `npm install`
- Restart the development server if issues persist

## Best Practices
1. Upload clear, high-quality invoice images
2. Use descriptive filenames for better organization
3. Regularly export reports for backup
4. Ask specific questions to the AI assistant for better responses
