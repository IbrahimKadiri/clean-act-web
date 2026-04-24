import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 30%, oklch(0.78 0.16 65 / 0.35), transparent 70%), radial-gradient(50% 50% at 80% 70%, oklch(0.32 0.08 255 / 0.6), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative py-24 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-accent">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-balance">{title}</h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-cream/75 max-w-2xl text-balance">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
