import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-32">
      <div className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="cream" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              Groupe Abid de Commerce et Transports Internationaux. Spécialiste du transit
              véhicules, du transport maritime et de la distribution agroalimentaire.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a href="tel:+33000000000" className="inline-flex items-center gap-3 hover:text-cream transition-colors">
                <Phone className="h-4 w-4 text-accent" /> +33 0 00 00 00 00
              </a>
              <a href="mailto:contact@gacti.fr" className="inline-flex items-center gap-3 hover:text-cream transition-colors">
                <Mail className="h-4 w-4 text-accent" /> contact@gacti.fr
              </a>
              <span className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" /> Près des ports d'export, France
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-cream">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/transit-vehicules" className="hover:text-cream transition-colors">Transit véhicules</Link></li>
              <li><Link to="/vehicules" className="hover:text-cream transition-colors">Catalogue véhicules</Link></li>
              <li><Link to="/catalogues" className="hover:text-cream transition-colors">Catalogues produits</Link></li>
              <li><Link to="/transport" className="hover:text-cream transition-colors">Transport maritime</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-cream">Société</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/equipe" className="hover:text-cream transition-colors">L'équipe</Link></li>
              <li><Link to="/devis" className="hover:text-cream transition-colors">Devis express</Link></li>
              <li><a href="#" className="hover:text-cream transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} GACTI. Tous droits réservés.</span>
          <span>Refonte responsive — design éditorial maritime.</span>
        </div>
      </div>
    </footer>
  );
}
