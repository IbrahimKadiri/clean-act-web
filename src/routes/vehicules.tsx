import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Calendar, Gauge } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import imgVehicles from "@/assets/service-vehicles.jpg";

export const Route = createFileRoute("/vehicules")({
  head: () => ({
    meta: [
      { title: "Catalogue véhicules — Neufs & récents | GACTI" },
      {
        name: "description",
        content:
          "Découvrez notre catalogue de véhicules à la vente : citadines, berlines, utilitaires neufs et de moins de 3 ans, adaptés à tous les besoins.",
      },
      { property: "og:title", content: "Catalogue véhicules — GACTI" },
      {
        property: "og:description",
        content: "Une gamme diversifiée de véhicules neufs et récents pour tous vos projets.",
      },
      { property: "og:image", content: imgVehicles },
      { name: "twitter:image", content: imgVehicles },
    ],
  }),
  component: VehiculesPage,
});

const categories = [
  {
    title: "Citadines",
    description: "Compactes, économiques et faciles à manœuvrer en ville.",
    tag: "Dès 12 000 €",
  },
  {
    title: "Berlines",
    description: "Confort et élégance pour les longs trajets et les déplacements professionnels.",
    tag: "Dès 22 000 €",
  },
  {
    title: "SUV & 4x4",
    description: "Polyvalence et robustesse pour tous les terrains et usages familiaux.",
    tag: "Dès 28 000 €",
  },
  {
    title: "Utilitaires",
    description: "Solutions adaptées aux artisans et entreprises avec gros volumes.",
    tag: "Dès 18 000 €",
  },
];

function VehiculesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Catalogue véhicules"
        title={
          <>
            Une gamme pensée pour <em className="not-italic text-accent">chaque destination</em>.
          </>
        }
        description="Des véhicules neufs ou récents (moins de 3 ans), sélectionnés pour leur fiabilité, leur conformité aux normes d'export et leur rapport qualité-prix."
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img
              src={imgVehicles}
              alt="SUV moderne dans un parking près du port"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Notre sélection</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance">
              Choisir, financer, expédier — <em className="not-italic text-accent">en un seul interlocuteur</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              GACTI vous accompagne du choix du véhicule à la finalisation de l'achat, en intégrant
              toutes les formalités d'export pour une expérience simple et fluide.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Sparkles, label: "Neufs garantis" },
                { icon: Calendar, label: "Moins de 3 ans" },
                { icon: Gauge, label: "Faibles km" },
              ].map((f) => (
                <div key={f.label} className="rounded-2xl bg-secondary/60 p-4 text-center">
                  <f.icon className="h-5 w-5 text-accent mx-auto" />
                  <div className="mt-2 text-sm font-semibold">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Catégories</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance">
              Trouvez le véhicule qui vous ressemble
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <article
                key={c.title}
                className="group rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-accent">{c.tag}</div>
                <h3 className="mt-3 text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2 transition-all">
                  Voir <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="ink" size="lg" asChild>
              <Link to="/devis">Demander un véhicule sur-mesure</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
