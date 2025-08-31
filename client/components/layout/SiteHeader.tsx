import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block size-8 rounded bg-primary"></span>
          <span className="font-extrabold tracking-tight">
            Thirumala
            <span className="text-primary"> Septic</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#services" className="text-foreground/80 hover:text-foreground">
            Services
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#booking">
            <Button size="sm" className="rounded-full px-5">Book Now</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
