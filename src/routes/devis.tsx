import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Devis express — Réponse en 24h | GACTI" },
      {
        name: "description",
        content:
          "Décrivez votre projet d'export : véhicule, marchandise, destination. Nous revenons vers vous sous 24h avec une proposition complète et transparente.",
      },
      { property: "og:title", content: "Devis express — GACTI" },
      {
        property: "og:description",
        content: "Une réponse claire et chiffrée en moins de 24 heures.",
      },
    ],
  }),
  component: DevisPage,
});

function DevisPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Devis express"
        title={
          <>
            Une réponse claire en <em className="not-italic text-accent">moins de 24 heures</em>.
          </>
        }
        description="Décrivez-nous votre projet — nous revenons vers vous avec une proposition complète, transparente et adaptée."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="rounded-3xl bg-card p-8 md:p-12 shadow-[var(--shadow-soft)]">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-14 w-14 text-accent mx-auto" />
                <h2 className="mt-6 text-3xl font-semibold">Demande envoyée</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Merci ! Notre équipe revient vers vous sous 24 heures avec une proposition adaptée.
                </p>
                <Button variant="ink" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nom complet" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Téléphone" name="phone" type="tel" />
                  <SelectField
                    label="Type de service"
                    name="service"
                    options={[
                      "Transit véhicules",
                      "Achat véhicule",
                      "Catalogue produits",
                      "Transport maritime",
                      "Autre",
                    ]}
                  />
                </div>
                <Field label="Destination" name="destination" placeholder="Pays / port" />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Décrivez votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
                    placeholder="Volume, marchandise, délais souhaités…"
                  />
                </div>
                <Button type="submit" variant="amber" size="xl" className="w-full sm:w-auto">
                  Envoyer ma demande <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-ink text-cream p-8">
              <h3 className="font-display text-2xl font-semibold">Une question urgente ?</h3>
              <p className="mt-3 text-cream/70 text-sm">
                Notre équipe est joignable directement pour les demandes prioritaires.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <a href="tel:+33000000000" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" /> +33 0 00 00 00 00
                </a>
                <a href="mailto:contact@gacti.fr" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" /> contact@gacti.fr
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" /> Près des ports d'export, France
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary/60 p-8">
              <h3 className="font-display text-xl font-semibold">Pourquoi un devis express ?</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Réponse personnalisée en 24h",
                  "Tarification transparente",
                  "Conseils d'experts inclus",
                  "Sans engagement",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
