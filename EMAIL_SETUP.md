# Email Service Setup Guide

Your contact form is ready, but you need to configure an email service to receive messages. Follow these simple steps:

## Option 1: Web3Forms (Recommended - Easiest) ⭐

Web3Forms is the simplest option - it takes less than 2 minutes to set up!

### Steps:

1. **Get your free access key:**
   - Go to: https://web3forms.com
   - Enter your email: `codebug0527@gmail.com`
   - Click "Get Access Key"
   - Copy the access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

2. **Update your `.env` file:**
   - Open the `.env` file in your project root
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

3. **Restart your development server:**
   ```bash
   # Stop the server (Ctrl+C) and restart:
   npm run dev
   ```

4. **Test it!** Fill out the contact form and send a test message.

That's it! Your contact form will now send emails to `codebug0527@gmail.com`.

---

## Option 2: EmailJS (Alternative)

If you prefer EmailJS, follow these steps:

### Steps:

1. **Create an EmailJS account:**
   - Go to: https://www.emailjs.com/
   - Sign up for a free account

2. **Create an Email Service:**
   - Go to "Email Services" → "Add New Service"
   - Choose "Gmail" (or your email provider)
   - Connect your Gmail account (`codebug0527@gmail.com`)

3. **Create an Email Template:**
   - Go to "Email Templates" → "Create New Template"
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Set "To Email" to: `codebug0527@gmail.com`
   - Save the template

4. **Get your credentials:**
   - **Service ID**: Found in "Email Services" (e.g., `service_xxxxx`)
   - **Template ID**: Found in "Email Templates" (e.g., `template_xxxxx`)
   - **Public Key**: Found in "Account" → "General" → "API Keys" (e.g., `xxxxxxxxxxxxx`)

5. **Update your `.env` file:**
   - Open the `.env` file in your project root
   - Uncomment and fill in the EmailJS variables:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Restart your development server:**
   ```bash
   npm run dev
   ```

---

## Troubleshooting

- **"Email service not configured" error**: Make sure you've added your access key/credentials to the `.env` file and restarted the server.

- **Messages not arriving**: 
  - Check your spam folder
  - Verify the email address in your `.env` file matches your account
  - For Web3Forms: Check your Web3Forms dashboard for delivery status
  - For EmailJS: Check the EmailJS dashboard for logs

- **Still having issues?**: Contact me directly at codebug0527@gmail.com

---

## Quick Start (Web3Forms)

1. Visit: https://web3forms.com
2. Enter: `codebug0527@gmail.com`
3. Copy access key
4. Paste in `.env` file
5. Restart server
6. Done! ✅

