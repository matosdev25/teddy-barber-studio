export const WHATSAPP_NUMBER = "50768475071";

export function createWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
