import BookingForm from "@/components/booking/BookingForm";

export default function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto grid items-center gap-8 px-4 py-20 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Uppal • Owner: Kishan
            </span>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Sri Thirumala Septic Tank Cleaners
            </h1>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Reliable, hygienic, and on-time septic tank cleaning services in
              Uppal. We use modern equipment and safe practices to keep your
              home and business clean and odor-free.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View Services
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-primary"></span>{" "}
                Same-day slots (subject to availability)
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-primary"></span>{" "}
                Trained technicians
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-primary"></span>{" "}
                Transparent pricing
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-primary"></span>{" "}
                Eco-friendly disposal
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-card shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Thirumala Septic Tank Cleaners"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Our Services</h2>
        <p className="mt-2 max-w-prose text-muted-foreground">
          Complete septic solutions for homes, apartments, and commercial
          properties in Uppal.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Septic Tank Cleaning</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thorough cleaning with modern suction equipment, safe and fast.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Emergency Blockage Removal</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick response for backups and overflow prevention.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">Routine Maintenance</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Scheduled visits to keep your system running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-8 max-w-xl text-center">
            <h2 className="text-2xl font-bold">Book a Service</h2>
            <p className="mt-2 text-muted-foreground">
              Select your preferred date and time. You will receive a
              confirmation email; the owner will be notified.
            </p>
          </div>
          <div className="flex justify-center">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* About/Contact */}
      <section
        id="about"
        className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2"
      >
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-2 text-muted-foreground">
            Thirumala Septic Tank Cleaners is locally owned and operated by
            Kishan, serving Uppal with trusted service and fair pricing.
          </p>
        </div>
        <div id="contact">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-muted-foreground">
            For questions or urgent requests, please book above or email us at{" "}
            <span className="font-medium">
              {(import.meta as any).env?.VITE_OWNER_EMAIL || ""}
            </span>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
