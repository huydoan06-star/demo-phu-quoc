/* ==========================================================
   EDIT THIS FILE to change copy, prices and contact details.
   No build step: save, commit, push.
   ========================================================== */
window.SITE_CONFIG = {
  brand: "Huy Chatbot",                   // brand name — change freely
  tagline: "A 24/7 chatbot for small businesses",

  // ---- Contact (real inquiries) ----
  // Leave email "" to hide email links; Telegram is used as fallback.
  contact: {
    email: "huydoan06@gmail.com",
    telegram: "DHUYHEHE"              // shown as t.me/DHUYHEHE
  },

  // ---- Pricing (approved) ----
  pricingNote: "",                    // optional small label above pricing; "" = hidden
  // Founding trial: discounted setup for the first N businesses, in exchange for a testimonial/review.
  // Set to null to remove the offer everywhere (page + chatbot).
  trial: { setup: 149, spots: 3 },
  currency: "$",
  plans: [
    {
      id: "website",
      name: "Website Chatbot",
      setup: 299,                     // one-time
      monthly: 99,
      blurb: "Everything you need to answer customers and take bookings on your site.",
      features: [
        "Custom-trained on your services, prices & FAQs",
        "Takes appointment requests 24/7",
        "Every booking logged to your Google Sheet",
        "Email alert for each new booking",
        "Monthly script updates included"
      ],
      featured: true
    },
    {
      id: "channels",
      name: "Facebook / WhatsApp Add-on",
      setup: null,                    // null = "Custom quote"
      monthly: null,
      blurb: "Put the same assistant on your Facebook Page Messenger and WhatsApp Business.",
      features: [
        "Same answers across every channel",
        "All bookings land in one sheet",
        "Quoted after a short call"
      ],
      featured: false
    }
  ],

  // Preferred-time options offered in the "Book a consult" bot flow
  consultTimes: [
    "Weekday morning (9–12)",
    "Weekday afternoon (12–5)",
    "Weekday evening (5–7)",
    "Saturday morning"
  ],
  timezoneLabel: "your local time"
};
