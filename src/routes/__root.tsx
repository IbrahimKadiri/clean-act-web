import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GACTI — Transit véhicules, transport maritime & catalogues" },
      {
        name: "description",
        content:
          "GACTI accompagne vos formalités douanières, l'export de véhicules, le transport maritime sur-mesure et la distribution agroalimentaire.",
      },
      { name: "author", content: "GACTI" },
      { property: "og:title", content: "GACTI — Transit véhicules, transport maritime & catalogues" },
      {
        property: "og:description",
        content:
          "Transit véhicules, transport maritime et catalogues produits. Une équipe experte pour vos exports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GACTI — Transit véhicules, transport maritime & catalogues" },
      { name: "description", content: "Gacti Refined offers a clean, responsive website experience for gacti.fr." },
      { property: "og:description", content: "Gacti Refined offers a clean, responsive website experience for gacti.fr." },
      { name: "twitter:description", content: "Gacti Refined offers a clean, responsive website experience for gacti.fr." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a78efff-00ae-4d46-a923-d3901658cc23/id-preview-f4cc8869--0ced2a67-2dfb-41ed-9b46-df948a1e8225.lovable.app-1777015029668.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4a78efff-00ae-4d46-a923-d3901658cc23/id-preview-f4cc8869--0ced2a67-2dfb-41ed-9b46-df948a1e8225.lovable.app-1777015029668.png" },
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return <Outlet />;
}
