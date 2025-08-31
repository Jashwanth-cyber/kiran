import emailjs from "@emailjs/browser";

export type BookingPayload = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  date: string; // ISO date string
  time: string; // e.g., "10:00 AM"
  notes?: string;
};

function getEnv(name: string): string | undefined {
  const value = (import.meta as any).env?.[name] as string | undefined;
  return value && value.length > 0 ? value : undefined;
}

const PUBLIC_KEY = getEnv("VITE_EMAILJS_PUBLIC_KEY");
const SERVICE_ID = getEnv("VITE_EMAILJS_SERVICE_ID");
const TEMPLATE_ID_USER = getEnv("VITE_EMAILJS_TEMPLATE_ID_BOOKING_USER");
const TEMPLATE_ID_OWNER = getEnv("VITE_EMAILJS_TEMPLATE_ID_BOOKING_OWNER");
const OWNER_EMAIL = getEnv("VITE_OWNER_EMAIL");

export const emailConfigStatus = {
  hasPublicKey: Boolean(PUBLIC_KEY),
  hasServiceId: Boolean(SERVICE_ID),
  hasTemplateUser: Boolean(TEMPLATE_ID_USER),
  hasTemplateOwner: Boolean(TEMPLATE_ID_OWNER),
  hasOwnerEmail: Boolean(OWNER_EMAIL),
};

let initialized = false;
export function ensureEmailInitialized() {
  if (!initialized && PUBLIC_KEY) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
}

export async function sendBookingEmails(payload: BookingPayload) {
  ensureEmailInitialized();

  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID_USER) {
    throw new Error(
      "Email service not configured. Please set VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID_BOOKING_USER.",
    );
  }

  const templateParams = {
    customer_name: payload.name,
    customer_email: payload.email,
    customer_phone: payload.phone ?? "",
    customer_address: payload.address ?? "",
    booking_date: payload.date,
    booking_time: payload.time,
    booking_notes: payload.notes ?? "",
    owner_email: OWNER_EMAIL ?? "",
    business_name: "Sri Thirumala Septic Tank Cleaners",
    business_location: "Uppal",
  } as Record<string, string>;

  // Send confirmation to customer
  const userPromise = emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID_USER,
    templateParams,
  );

  // Send notification/reminder to owner if configured
  const ownerPromise = TEMPLATE_ID_OWNER && OWNER_EMAIL
    ? emailjs.send(SERVICE_ID, TEMPLATE_ID_OWNER, templateParams)
    : Promise.resolve();

  await Promise.all([userPromise, ownerPromise]);
}
