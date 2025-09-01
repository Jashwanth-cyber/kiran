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
                src="data:image/jpeg;base64,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"
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
            For questions or urgent requests, please book above or call us at
            <span className="font-medium ml-1">
              9849283153
            </span>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
