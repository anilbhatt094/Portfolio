// lib/gtag.js
export const GA_TRACKING_ID = 'YOUR_TRACKING_ID'; // Replace with your Google Analytics tracking ID

// Initialize Google Analytics
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};