import { useState } from "react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { sendBookingEmails, emailConfigStatus } from "@/lib/email";
import { toast } from "sonner";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error("Please fill in name, email, date and time.");
      return;
    }
    setLoading(true);
    try {
      await sendBookingEmails({ ...form });
      toast.success("Booking submitted! A confirmation email has been sent.");
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        time: "",
        notes: "",
      });
    } catch (err: any) {
      toast.error(err?.message || "Failed to submit booking. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const today = format(new Date(), "yyyy-MM-dd");

  return (
    <div className="w-full max-w-xl rounded-xl border bg-card p-6 shadow-sm">
      {!(
        emailConfigStatus.hasPublicKey &&
        emailConfigStatus.hasServiceId &&
        emailConfigStatus.hasTemplateUser
      ) && (
        <div className="mb-4 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          Email notifications are not configured yet. Set
          VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID and
          VITE_EMAILJS_TEMPLATE_ID_BOOKING_USER.
        </div>
      )}
      {!(
        emailConfigStatus.hasTemplateOwner && emailConfigStatus.hasOwnerEmail
      ) && (
        <div className="mb-4 rounded-md border border-amber-400/40 bg-amber-50 p-3 text-sm text-amber-700">
          Owner reminders are not fully configured. Set
          VITE_EMAILJS_TEMPLATE_ID_BOOKING_OWNER and VITE_OWNER_EMAIL to notify
          the owner.
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Optional"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Uppal area address"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={onChange}
              min={today}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Input
              id="time"
              type="time"
              name="time"
              value={form.time}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={onChange}
            placeholder="Any access details, landmarks, or special instructions"
          />
        </div>
        <Button disabled={loading} className="w-full text-base">
          {loading ? "Booking..." : "Book Now"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By booking, you agree to be contacted via email for confirmations and
          reminders.
        </p>
      </form>
    </div>
  );
}
