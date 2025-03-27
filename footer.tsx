import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div>
              <h3 className="text-lg font-semibold text-foreground">SquidProxies</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Enterprise-grade private proxies. Guaranteed for all purposes.
              </p>
              <div className="mt-4 flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                ].map((social, index) => (
                  <Link
                    key={social.label}
                    href="#"
                    className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Products</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  { name: "Private Proxies", href: "/private-proxies" },
                  { name: "Custom Proxies", href: "/custom-proxies" },
                  { name: "Shared Proxies", href: "/shared-proxies" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  { name: "FAQ", href: "/faq" },
                  { name: "Support", href: "/support" },
                  { name: "Blog", href: "/blog" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Affiliates", href: "/affiliates" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-12 border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SquidProxies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

