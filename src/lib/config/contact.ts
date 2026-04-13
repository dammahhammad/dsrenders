// Contact form configuration
export const CONTACT_CONFIG = {
  API_URL: '/api/contact',
  REQUEST_TIMEOUT: 10000,
  SUCCESS_AUTO_CLOSE_DELAY: 2000,
  FALLBACK_EMAIL: 'contact@dsrenders.com',
  RESEND_FROM: 'DS Renders <form@dsrenders.com>',
  CONTACT_EMAIL: 'contact@dsrenders.com',
} as const;
