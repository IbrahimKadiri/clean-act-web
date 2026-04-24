import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "L'équipe GACTI — Experts logistique & transit" },
      {
        name: "description",
        content:
          "Une équipe expérimentée et passionnée, à votre écoute pour orchestrer chaque étape de vos exports avec rigueur et transparence.",
      },
      { property: "og:title", content: "L'équipe GACTI" },
      {
        property: "og:description",
        content: "Découvrez les femmes et les hommes qui orchestrent vos exports.",
      },
    ],
  }),
  component: EquipePage,
});

const values = [
  {
    title: "Rigueur",
    description:
      "Chaque dossier est traité avec une attention extrême aux détails — les exports n'autorisent pas l'à-peu-près.",
  },
  {
    title: "Transparence",
    description:
      "Un seul interlocuteur, des points d'étape clairs et des tarifs sans surprise.",
  },
  {
    title: "Engagement",
    description:
      "Nous prenons vos délais au sérieux et activons toutes les ressources nécessaires pour les tenir.",
  },
];

function EquipePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="L'équipe GACTI"
        title={
          <>
            Une équipe <em className="not-italic text-accent">à taille humaine</em>, des moyens à grande échelle.
          </>
        }
        description="GACTI réunit des spécialistes du transit, du transport maritime et de la distribution. Notre force : une organisation agile et une expertise pointue."
      />

      <section className="container-page py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v) => (
            <article key={v.title} className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="font-display text-5xl text-accent">{v.title[0]}</div>
              <h3 className="mt-4 text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] bg-secondary/60 p-10 md:p-16 text-center">
          <span className="eyebrow">Rejoignez-nous</span>
          <h2 className="mt-3 text-3xl md:text-5xl text-balance max-w-3xl mx-auto">
            Vous partagez nos valeurs ? Travaillons <em className="not-italic text-accent">ensemble</em>.
          </h2>
          <Button variant="ink" size="lg" className="mt-8" asChild>
            <Link to="/devis">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
