"use client";
import Link from "next/link";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-[var(--primary)]">Free</span>Mail
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="text-sm text-slate-600 hover:text-slate-900" href="/gallery">Gallery</Link>
          <SignedIn>
            <Link className="text-sm text-slate-600 hover:text-slate-900" href="/dashboard">Dashboard</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}