import Image from "next/image"

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#" },
      { label: "Launch", href: "#launch" },
      { label: "Registry", href: "https://registry.omatrust.org" },
      { label: "Docs", href: "#developers" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "GitHub", href: "https://github.com/oma3dao" },
      { label: "Standards", href: "#" },
      { label: "Integration", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "OMA3.org", href: "https://oma3.org" },
      { label: "Reputation Framework", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo area */}
          <div className="flex flex-col gap-4 md:max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src="/images/oma3-logo.svg"
                alt="OMA3 logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Decentralized trust infrastructure for the open internet. Governed by OMA3, a Swiss association.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2">
            <Image
              src="/images/oma3-logo.svg"
              alt="OMA3 logo"
              width={56}
              height={18}
              className="h-4 w-auto opacity-90"
            />
            <p className="text-xs text-zinc-400">
              {"OMATrust is a project of OMA3. All rights reserved."}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-400 underline-offset-4 hover:text-foreground hover:underline transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-zinc-400 underline-offset-4 hover:text-foreground hover:underline transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
