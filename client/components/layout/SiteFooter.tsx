export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto grid gap-4 px-4 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Thirumala Septic Tank Cleaners</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Professional septic tank cleaning in Uppal. Owner: Kishan.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p className="mt-2 text-sm text-muted-foreground">Uppal, Hyderabad</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Email: <span className="select-all">{(import.meta as any).env?.VITE_OWNER_EMAIL || ""}</span>
          </p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Thirumala Septic Tank Cleaners. All rights reserved.
      </div>
    </footer>
  );
}
