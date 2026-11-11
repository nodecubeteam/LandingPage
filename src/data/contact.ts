export const contact = {
  whatsappNumber: "573054795044",
  whatsappDisplay: "+57 305 479 5044",
  email: "nodecubeteam@gmail.com",
  siteUrl: "https://nodecube.pages.dev",
};

export const whatsappHref = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoHref = (subject: string, body: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
