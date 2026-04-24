import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ship, Car, Package, FileText, Quote, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroPort from "@/assets/hero-port.jpg";
import imgCustoms from "@/assets/service-customs.jpg";
import imgVehicles from "@/assets/service-vehicles.jpg";
import imgCatalog from "@/assets/service-catalog.jpg";
import imgTransport from "@/assets/service-transport.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GACTI — Transit véhicules, transport maritime & catalogues" },
      {
        name: "description",
        content:
          "GACTI : votre partenaire logistique pour le transit véhicules, le transport maritime sur-mesure et la distribution agroalimentaire à l'international.",
      },
      { property: "og:title", content: "GACTI — Logistique & export international" },
      {
        property: "og:description",
        content:
          "Transit véhicules, transport maritime et catalogues produits. Une équipe experte pour vos exports.",
      },
      { property: "og:image", content: heroPort },
      { name: "twitter:image", content: heroPort },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: FileText,
    title: "Transit véhicules",
    description:
      "Formalités douanières, EX-A, MRN, cartes grises et assurances temporaires. Un guichet unique pour votre export.",
    image: imgCustoms,
    to: "/transit-vehicules" as const,
  },
  {
    icon: Car,
    title: "Catalogue véhicules",
    description:
      "Citadines, berlines et utilitaires neufs ou récents (- de 3 ans). Une sélection pour tous les besoins.",
    image: imgVehicles,
    to: "/vehicules" as const,
  },
  {
    icon: Package,
    title: "Catalogues produits",
    description:
      "Une sélection agroalimentaire complète et des produits adaptés à vos marchés de destination.",
    image: imgCatalog,
    to: "/catalogues" as const,
  },
  {
    icon: Ship,
    title: "Transport maritime",
    description:
      "Solutions sur-mesure, conteneurs FCL/LCL et suivi personnalisé jusqu'à destination.",
    image: imgTransport,
    to: "/transport" as const,
  },
];

const stats = [
  { value: "15+", label: "Années d'expertise" },
  { value: "2 000+", label: "Véhicules exportés" },
  { value: "30+", label: "Pays desservis" },
  { value: "98%", label: "Clients satisfaits" },
];

const testimonials = [
  {
    quote:
      "Excellente expérience avec GACTI. Les démarches d'immatriculation ont été rapides et transparentes, et l'équipe est très professionnelle. Je recommande vivement.",
    name: "Sayah Adam",
    role: "Client export véhicule",
  },
  {
    quote:
      "Service impeccable pour le transit de mon véhicule. L'équipe a géré toutes les formalités douanières avec efficacité, et le suivi était constant.",
    name: "Nitcha Hakim",
    role: "Particulier",
  },
  {
    quote:
      "GACTI est une entreprise fiable et à l'écoute. Leur service de mise à disposition des véhicules est parfaitement organisé.",
    name: "Cressier Dominique",
    role: "Professionnel",
  },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden">
          <img
            src={heroPort}
            alt="Port maritime au coucher du soleil avec porte-conteneurs"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden="true"
          />
          <div className="container-page relative pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl">
              <span className="eyebrow text-accent animate-fade-up">Groupe Abid · Transit & Transport</span>
              <h1 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-semibold text-cream text-balance animate-fade-up">
                Vos exports,
                <br />
                <em className="not-italic text-accent font-medium">orchestrés</em> avec précision.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-cream/80 max-w-2xl text-balance animate-fade-up" style={{ animationDelay: "120ms" }}>
                GACTI accompagne particuliers et professionnels sur l'ensemble de la chaîne logistique :
                formalités douanières, vente de véhicules, distribution agroalimentaire et transport maritime sur-mesure.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
                <Button variant="amber" size="xl" asChild>
                  <Link to="/devis">
                    Obtenir un devis express <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outlineCream" size="xl" asChild>
                  <Link to="/transport">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="absolute bottom-0 inset-x-0 border-t border-cream/10 bg-ink/40 backdrop-blur-md">
            <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-cream/10">
              {stats.map((s) => (
                <div key={s.label} className="py-6 px-4 text-center md:text-left first:pl-0 md:first:pl-8">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-cream">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm text-cream/60 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="container-page py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <span className="eyebrow">Nos métiers</span>
              <h2 className="mt-3 text-4xl md:text-6xl text-balance">
                Quatre expertises, <em className="not-italic text-accent">une même rigueur</em>.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg md:justify-self-end">
              De la déclaration douanière au transport maritime, GACTI orchestre chaque étape pour
              que votre marchandise arrive à destination sans friction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-secondary/60 py-24 md:py-32">
          <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Notre approche</span>
              <h2 className="mt-3 text-4xl md:text-5xl text-balance">
                Une logistique <em className="not-italic text-accent">sans angles morts</em>.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Chaque dossier est suivi par un interlocuteur unique. Nos espaces de stationnement
                sécurisés, situés à proximité des ports d'export, garantissent une expédition rapide
                et conforme.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "Suivi personnalisé du dossier de A à Z",
                  "Conformité douanière garantie (EX-A, MRN)",
                  "Stationnement sécurisé près des ports",
                  "Carte provisoire & assurance temporaire",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="ink" size="lg" className="mt-10" asChild>
                <Link to="/equipe">Rencontrer l'équipe</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-elevated)]">
                <img
                  src={imgTransport}
                  alt="Conteneurs maritimes empilés dans un port"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 md:-left-12 max-w-[280px] rounded-2xl bg-ink text-cream p-6 shadow-[var(--shadow-elevated)]">
                <div className="font-display text-4xl font-semibold text-accent">24/7</div>
                <div className="mt-1 text-sm text-cream/70">
                  Suivi disponible à toute heure pour les dossiers en cours
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container-page py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">Témoignages</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance">
              Nos clients <em className="not-italic text-accent">parlent de nous</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)] flex flex-col"
              >
                <Quote className="h-8 w-8 text-accent" />
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/90 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-page pb-24">
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-ink text-cream p-10 md:p-20">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 20%, oklch(0.78 0.16 65 / 0.4), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
              <div>
                <span className="eyebrow text-accent">Prêt à expédier ?</span>
                <h2 className="mt-3 text-4xl md:text-6xl text-cream text-balance">
                  Un devis express en moins de <em className="not-italic text-accent">24 heures</em>.
                </h2>
                <p className="mt-6 text-cream/75 text-lg max-w-xl">
                  Décrivez votre projet — véhicule, marchandise, destination — nous revenons vers
                  vous avec une proposition complète et transparente.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Button variant="amber" size="xl" asChild>
                  <Link to="/devis">
                    Demander un devis <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <a
                  href="tel:+33000000000"
                  className="text-cream/70 hover:text-cream text-sm font-medium transition-colors"
                >
                  ou appelez-nous au +33 0 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
