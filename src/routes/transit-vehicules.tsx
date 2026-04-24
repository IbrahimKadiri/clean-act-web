import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck, IdCard, Shield, Warehouse, ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import imgCustoms from "@/assets/service-customs.jpg";

export const Route = createFileRoute("/transit-vehicules")({
  head: () => ({
    meta: [
      { title: "Transit véhicules — Douane, carte grise & assurance | GACTI" },
      {
        name: "description",
        content:
          "Formalités douanières EX-A et MRN, carte provisoire d'immatriculation, assurance temporaire et stationnement sécurisé pour vos véhicules d'export.",
      },
      { property: "og:title", content: "Transit véhicules — GACTI" },
      {
        property: "og:description",
        content:
          "Un guichet unique pour vos exports véhicules : douane, immatriculation, assurance, stationnement.",
      },
      { property: "og:image", content: imgCustoms },
      { name: "twitter:image", content: imgCustoms },
    ],
  }),
  component: TransitPage,
});

const services = [
  {
    icon: FileCheck,
    title: "Services douaniers",
    description:
      "Traitement des déclarations douanières EX-A et MRN, conformité totale et processus rapide pour l'exportation de vos véhicules.",
    cta: "Réserver",
  },
  {
    icon: IdCard,
    title: "Carte provisoire d'immatriculation",
    description:
      "Le document indispensable pour circuler légalement en France et à l'étranger avant l'immatriculation définitive dans le pays de destination.",
    cta: "Réserver",
  },
  {
    icon: Shield,
    title: "Assurance temporaire",
    description:
      "Couverture adaptée de 1 à 30 jours pour permettre à vos véhicules de circuler en toute sécurité avant leur départ.",
    cta: "Réserver",
  },
  {
    icon: Warehouse,
    title: "Stationnement & remise des véhicules",
    description:
      "Espaces sécurisés à proximité des ports d'export pour une mise à disposition et une expédition optimisées.",
    cta: "Réserver",
  },
];

function TransitPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Transit véhicules"
        title={
          <>
            Vos formalités d'export, <em className="not-italic text-accent">prises en main</em> de bout en bout.
          </>
        }
        description="GACTI gère pour vous l'ensemble des démarches administratives, douanières et logistiques nécessaires à l'exportation de vos véhicules."
      />

      <section className="container-page py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl md:text-3xl font-semibold">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
              <Button variant="ink" size="default" className="mt-8 rounded-full" asChild>
                <Link to="/devis">
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img
              src={imgCustoms}
              alt="Officier des douanes traitant des documents d'export"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Pourquoi GACTI ?</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance">
              L'expertise douanière, <em className="not-italic text-accent">simplifiée</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Notre équipe maîtrise chaque subtilité des procédures d'export. Vous gagnez du temps,
              vous évitez les erreurs et vous expédiez sereinement.
            </p>
            <Button variant="amber" size="lg" className="mt-8" asChild>
              <Link to="/devis">Obtenir un devis</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
