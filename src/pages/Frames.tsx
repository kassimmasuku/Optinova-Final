import { Link } from "react-router-dom";
import LensCollection from "@/components/LensCollection";
import { ArrowLeft } from "lucide-react";

export default function Frames() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden" style={{ background: "hsl(var(--primary))" }}>
        <div className="container mx-auto px-4 py-20 pt-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Frames & Eyewear
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl">
            Browse prescription frames, sunglasses, contact lenses, and lens care essentials — tap any frame for details or use filters to narrow your search.
          </p>
        </div>
      </section>

      {/* Lens Collection */}
      <LensCollection />
    </>
  );
}
