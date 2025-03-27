"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Private Proxies", href: "/private-proxies" },
  { name: "Custom Proxies", href: "/custom-proxies" },
  { name: "Shared Proxies", href: "/shared-proxies" },
  { name: "FAQ", href: "/faq" },
  { name: "Affiliates", href: "/affiliates" },
  { name: "Support", href: "/support" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    // Set active item based on current path
    setActiveItem(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <Image src="/logo.svg" alt="SquidProxies Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative",
                activeItem === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left",
                  activeItem === item.href && "scale-x-100",
                )}
              />
            </Link>
          ))}
          <Button
            variant="default"
            asChild
            className="transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
          >
            <Link href="/client-area">Client Area</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 bg-background border-b border-border/40 md:hidden transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-1",
                  activeItem === item.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              asChild
              className="w-full transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
            >
              <Link href="/client-area">Client Area</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

