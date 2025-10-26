// Contact form configuration
export const CONTACT_CONFIG = {
  // Replace with your Google Apps Script web app URL
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxPtTCSO9lX8XrHx0zxgeFcX9fovlQQLHChvdpYSzjerKcRSRd0Y7wLvKdgL92v_2TkYg/exec',
  
  // Request timeout in milliseconds
  REQUEST_TIMEOUT: 10000,
  
  // Auto-close dialog delay after successful submission (in milliseconds)
  SUCCESS_AUTO_CLOSE_DELAY: 2000,
  
  // Contact email for fallback
  FALLBACK_EMAIL: 'dammahhammad9@gmail.com',
} as const;
