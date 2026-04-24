import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Container, Globe2, Map } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import imgTransport from "@/assets/service-transport.jpg";

export const Route = createFileRoute("/transport")({
  head: () => ({
    meta: [
      { title: "Transport maritime sur-mesure | GACTI" },
      {
        name: "description",
        content:
          "Solutions de transport maritime personnalisées : conteneurs FCL/LCL, suivi en temps réel, optimisation des délais. Une équipe d'experts à votre écoute.",
      },
      { property: "og:title", content: "Transport maritime — GACTI" },
      {
        property: "og:description",
        content: "Transport maritime fiable et personnalisé, optimisé pour vos délais.",
      },
      { property: "og:image", content: imgTransport },
      { name: "twitter:image", content: imgTransport },
    ],
  }),
  component: TransportPage,
});

const features = [
  {
    icon: Container,
    title: "FCL & LCL",
    description: "Conteneur complet ou groupage, selon le volume de votre marchandise.",
  },
  {
    icon: Globe2,
    title: "Couverture mondiale",
    description: "Plus de 30 destinations actives sur tous les continents.",
  },
  {
    icon: Map,
    title: "Suivi temps réel",
    description: "Visibilité complète sur l'acheminement, du chargement à la livraison.",
  },
  {
    icon: Anchor,
    title: "Accès aux ports clés",
    description: "Marseille, Le Havre, Anvers et au-delà — un accès direct aux grands hubs.",
  },
];

function TransportPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Transport maritime"
        title={
          <>
            Des solutions <em className="not-italic text-accent">sur-mesure</em>, des délais maîtrisés.
          </>
        }
        description="Notre équipe d'experts conçoit avec vous des solutions logistiques flexibles pour optimiser vos délais et vos coûts."
      />

      <section className="container-page py-24 md:py-32">
        <div className="relative rounded-[2rem] overflow-hidden">
          <img
            src={imgTransport}
            alt="Conteneurs maritimes empilés sous un ciel bleu"
            width={1920}
            height={900}
            loading="lazy"
            className="w-full h-[40vh] md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 flex items-end p-8 md:p-16">
            <div className="max-w-2xl text-cream">
              <h2 className="text-3xl md:text-5xl font-semibold text-balance">
                Choisissez GACTI pour un transport <em className="not-italic text-accent">fiable</em>.
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border p-6 hover:border-accent/50 hover:bg-secondary/40 transition-colors"
            >
              <f.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="amber" size="xl" asChild>
            <Link to="/devis">Estimer mon transport</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
