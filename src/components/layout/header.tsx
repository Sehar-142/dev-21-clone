

"use client";

import { GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "@/components/motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "w-fit mx-auto mt-3 rounded-[40px] border shadow-md bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Divider */}
          <div className="flex items-center">
            <Logo />
            <div className="h-6 w-px bg-gray-200 ml-3" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-5 text-black">
            <NavLink href="/explore">Explore</NavLink>
            <NavLink href="/api">API</NavLink>
            <NavLink href="/magic-mcp">Magic MCP</NavLink>
          </nav>

          {/* GitHub link */}
          <div className="flex items-center">
            <a
              href="https://github.com/21st-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-black hover:text-black/80 transition-colors"
            >
              <GithubIcon size={20} />
              <span className="font-medium text-black">4.3k</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-6 h-6 rounded-full bg-black"></div>
      <span className="text-xl font-bold text-black">21st.dev</span>
    </Link>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-black hover:text-gray-800 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}
