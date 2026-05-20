import { Instagram, Star } from "lucide-react";
import React from "react";
import { galleryImages, testimonials } from "../data/gallery.js";

const starRatings = ["star-1", "star-2", "star-3", "star-4", "star-5"];

const topLayoutClasses = {
  "gallery-1": "xl:row-span-2",
  "gallery-2": "xl:row-span-2",
  "gallery-3": "xl:row-span-2",
  "gallery-4": "xl:row-span-1",
  "gallery-5": "xl:row-span-1",
};

const bottomLayoutClasses = {
  "gallery-6": "xl:row-span-1",
  "gallery-7": "xl:row-span-1",
  "gallery-8": "xl:row-span-2",
  "gallery-9": "xl:row-span-2",
  "gallery-10": "xl:row-span-2",
};

const galleryGridClassName =
  "grid grid-cols-1 gap-4 md:grid-cols-2 xl:h-[560px] xl:grid-cols-4 xl:grid-rows-2";

const GalleryItem = React.memo(function GalleryItem({ image, layoutClasses }) {
  return (
    <figure
      className={`group relative h-[280px] overflow-hidden rounded-2xl border border-[#F5A000]/25 bg-[#151515] shadow-[0_0_30px_rgba(245,160,0,0.08)] md:h-[320px] xl:h-auto ${
        layoutClasses[image.id] || ""
      }`}
    >
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: image.objectPosition || "center center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </figure>
  );
});

const TestimonialCard = React.memo(function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="relative p-7 text-center md:border-r md:border-white/10 md:last:border-r-0">
      <div className="flex justify-center gap-1 text-gold">
        {starRatings.map((starId) => (
          <Star key={`${testimonial.id}-${starId}`} size={15} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold italic leading-8 text-soft">
        “{testimonial.text}”
      </p>
      <p className="mt-3 text-sm font-semibold text-muted">— {testimonial.author}</p>
    </blockquote>
  );
});

function Gallery() {
  const topGallery = galleryImages.slice(0, 5);
  const bottomGallery = galleryImages.slice(5, 10);
  const bottomGalleryOrdered = [
    bottomGallery.find((image) => image.id === "gallery-6"),
    bottomGallery.find((image) => image.id === "gallery-8"),
    bottomGallery.find((image) => image.id === "gallery-9"),
    bottomGallery.find((image) => image.id === "gallery-10"),
    bottomGallery.find((image) => image.id === "gallery-7"),
  ].filter(Boolean);

  return (
    <section id="galeria" className="section-padding bg-ink">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">GALERÍA</p>
          <h2 className="section-title">
            La experiencia <span className="text-gold">Teddy</span>
          </h2>
          <p className="section-copy">
            Cortes, detalle y un ambiente premium en cada visita.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-14 space-y-5">
          <div className={galleryGridClassName}>
            {topGallery.map((image) => (
              <GalleryItem image={image} key={image.id} layoutClasses={topLayoutClasses} />
            ))}
          </div>

          <div className={galleryGridClassName}>
            {bottomGalleryOrdered.map((image) => (
              <GalleryItem image={image} key={image.id} layoutClasses={bottomLayoutClasses} />
            ))}
          </div>
        </div>

        <div className="gold-card mt-8 grid gap-0 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            className="inline-flex items-center gap-2 text-sm font-black text-gold transition hover:text-champagne"
            href="https://www.instagram.com/teddybarberstudio"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} />
            Síguenos en Instagram @teddybarberstudio
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Gallery);
