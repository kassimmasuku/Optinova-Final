import heroImg from "@/assets/hero-eye-exam.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import familyImg from "@/assets/family-glasses.jpg";
import childrenImg from "@/assets/children-eye-exam.jpg";
import equipmentImg from "@/assets/eye-equipment.jpg";
import womanImg from "@/assets/woman-glasses.jpg";
import teamImg from "@/assets/optometrist-team.jpg";
import glassesImg from "@/assets/glasses-display.jpg";
import kidsImg from "@/assets/kids-vision-test.jpg";
import diverseImg from "@/assets/diverse-patients.jpg";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { galleryCategories, type GalleryCategory } from "@/data/galleryCategories";
import GalleryCategoryDialog from "@/components/GalleryCategoryDialog";

const images = [
  { src: heroImg, alt: "Black female optometrist performing eye examination", caption: "Professional Eye Examinations", categoryId: "professional-eye-examinations" },
  { src: clinicImg, alt: "Modern eye care clinic interior", caption: "Our Modern Clinic", categoryId: "our-modern-clinic" },
  { src: familyImg, alt: "Black family choosing eyeglasses together", caption: "Family Eyewear Selection", categoryId: "family-eyewear-selection" },
  { src: childrenImg, alt: "Child eye examination with Black optometrist", caption: "Children's Eye Exams", categoryId: "childrens-eye-exams" },
  { src: equipmentImg, alt: "Modern eye examination equipment", caption: "Advanced Diagnostic Equipment", categoryId: "advanced-diagnostic-equipment" },
  { src: womanImg, alt: "Black African woman trying on glasses", caption: "Eyewear Fitting", categoryId: "eyewear-fitting" },
  { src: teamImg, alt: "Optinova Eye Care professional team", caption: "Our Professional Team", categoryId: "our-professional-team" },
  { src: glassesImg, alt: "Wide selection of eyeglass frames", caption: "Our Frames Collection", categoryId: "frames-collection" },
  { src: kidsImg, alt: "Black child during vision test", caption: "Kids Vision Testing", categoryId: "kids-vision-testing" },
  { src: diverseImg, alt: "Diverse multicultural patients at eye clinic", caption: "Welcoming All Patients", categoryId: "welcoming-all-patients" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | null>(null);
  const [activeImage, setActiveImage] = useState<string | undefined>();

  const openCategory = (categoryId: string, imageSrc: string) => {
    const category = galleryCategories[categoryId];
    if (category) {
      setActiveCategory(category);
      setActiveImage(imageSrc);
    }
  };

  return (
    <>
      <section className="pt-28 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">A glimpse inside Optinova Eye Care — our clinic, team, and the patients we serve.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Inside Optinova Eye Care</h2>
            <span className="accent-line mx-auto" />
            <p className="text-sm mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))" }}>
              Click any image to explore the services, equipment and care behind each category.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img) => (
              <button
                key={img.categoryId}
                type="button"
                className="break-inside-avoid gallery-img cursor-pointer w-full text-left group relative"
                onClick={() => openCategory(img.categoryId, img.src)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-semibold">{img.caption}</span>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mt-2 px-1 text-xs font-medium flex items-center justify-between" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <span>{img.caption}</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(var(--accent))" }}>View details →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryCategoryDialog
        category={activeCategory}
        imageSrc={activeImage}
        onClose={() => { setActiveCategory(null); setActiveImage(undefined); }}
      />
    </>
  );
}
