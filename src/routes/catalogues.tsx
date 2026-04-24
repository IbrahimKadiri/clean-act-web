import { createFileRoute, Link } from "@tanstack/react-router";
import { Apple, Wheat, Coffee, Beef, ShoppingBasket } from "lucide-react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import imgCatalog from "@/assets/service-catalog.jpg";

export const Route = createFileRoute("/catalogues")({
  head: () => ({
    meta: [
      { title: "Catalogues produits — Agroalimentaire & plus | GACTI" },
      {
        name: "description",
        content:
          "Une sélection complète de produits agroalimentaires et d'articles divers, soigneusement choisis pour leur qualité et leur conformité aux normes.",
      },
      { property: "og:title", content: "Catalogues produits — GACTI" },
      {
        property: "og:description",
        content:
          "Découvrez notre offre agroalimentaire et nos solutions logistiques fiables pour vos marchés.",
      },
      { property: "og:image", content: imgCatalog },
      { name: "twitter:image", content: imgCatalog },
    ],
  }),
  component: CataloguesPage,
});

const families = [
  { icon: Apple, name: "Fruits & légumes" },
  { icon: Wheat, name: "Céréales & farines" },
  { icon: Coffee, name: "Boissons" },
  { icon: Beef, name: "Produits frais" },
  { icon: ShoppingBasket, name: "Épicerie" },
];

function CataloguesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Catalogues produits"
        title={
          <>
            Une offre agroalimentaire <em className="not-italic text-accent">riche</em> et <em className="not-italic text-accent">fiable</em>.
          </>
        }
        description="Chaque produit est sélectionné pour sa qualité, sa conformité aux normes et sa capacité à répondre aux besoins de vos marchés."
      />

      <section className="container-page py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow">Notre catalogue</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance">
              Du producteur au <em className="not-italic text-accent">linéaire</em>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              GACTI propose une gamme complète de produits agroalimentaires, complétée par une
              variété d'articles dans d'autres secteurs. Solutions logistiques efficaces, traçabilité
              et conformité aux normes export.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {families.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-3"
                >
                  <f.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{f.name}</span>
                </div>
              ))}
            </div>
            <Button variant="amber" size="lg" className="mt-10" asChild>
              <Link to="/devis">Demander un catalogue</Link>
            </Button>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
            <img
              src={imgCatalog}
              alt="Allée de supermarché remplie de produits frais et colorés"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
