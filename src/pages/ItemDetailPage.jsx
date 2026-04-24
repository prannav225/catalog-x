import { useParams, Link, useNavigate } from "react-router-dom";
import { getItemBySlug, getCategoryMeta } from "../data/catalog";
import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";

export default function ItemDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = getItemBySlug(slug);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center space-y-8 animate-fade-in">
        <LucideIcons.SearchX size={64} className="text-muted" />
        <div className="space-y-2">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Item Not Found
          </h2>
          <p className="text-muted font-medium">
            The entry you are looking for does not exist in our archive.
          </p>
        </div>
        <Link
          to="/"
          className="px-8 py-3 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-accent transition-all"
        >
          Back to Directory
        </Link>
      </div>
    );
  }

  const meta = getCategoryMeta(item.category);
  const IconComponent = LucideIcons[meta.icon] || LucideIcons.Package;

  return (
    <div className="page-transition pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 pb-12 border-b border-border">
          <div className="space-y-6">
            <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Directory
              </Link>
              <LucideIcons.ChevronRight size={12} className="opacity-30" />
              <span className="text-primary">{item.category}</span>
              <LucideIcons.ChevronRight size={12} className="opacity-30" />
              <span className="text-text truncate max-w-[200px]">
                {item.itemname}
              </span>
            </nav>

            <div className="space-y-2">
              <div className="flex items-center gap-4 text-primary mb-2">
                <IconComponent size={24} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">
                  {item.category} Entry
                </span>
              </div>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                {item.itemname}
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-all self-start lg:self-end"
            >
              <LucideIcons.ArrowLeft size={16} />
              Return to Catalog
            </button>
            <div className="h-px w-full bg-border" />
            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted">
              <span>Status: Verified</span>
              <span>ID: {item.itemname.length}7-X</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Visual Showcase (5 columns) */}
          <div className="lg:col-span-5 space-y-12 animate-slide-up">
            <div className="relative bg-surface border border-border p-3 rounded-sm shadow-xl">
              <div className="relative aspect-3/4 bg-bg overflow-hidden border border-border/50">
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 shimmer-mask opacity-10" />
                )}
                <img
                  src={
                    imgError
                      ? `https://placehold.co/800x1200/1c1d21/94a3b8?text=${encodeURIComponent(item.itemname)}`
                      : item.image
                  }
                  alt={item.itemname}
                  className={`w-full h-full object-cover transition-all duration-1000 ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {
                    setImgError(true);
                    setImgLoaded(true);
                  }}
                />
              </div>
              <div className="absolute top-8 right-8">
                <div className="w-16 h-16 bg-surface/90 backdrop-blur-md border border-border flex items-center justify-center text-primary shadow-2xl">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="p-8 border border-border bg-surface/50 space-y-6">
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-muted border-b border-border pb-4">
                Classification Details
              </h3>
              <div className="space-y-4">
                <p className="text-sm font-medium leading-relaxed text-muted">
                  Technical data for the {item.itemname} is maintained by the
                  CatalogX system. All parameters listed have been verified
                  against current industrial standards.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="px-3 py-1 bg-primary/10 border border-primary/70 text-[9px] font-bold text-primary uppercase tracking-widest">
                    Verified
                  </div>
                  <div className="px-3 py-1 bg-accent/5 border border-accent text-[9px] font-bold text-accent uppercase tracking-widest">
                    Industrial Grade
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Data (7 columns) */}
          <div
            className="lg:col-span-7 flex flex-col animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="space-y-12">
              <div className="border-b-2 border-primary pb-8">
                <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-2">
                  Technical Specification
                </h3>
                <p className="text-xl sm:text-2xl font-serif font-medium leading-relaxed italic opacity-80">
                  Full parameter readout for {item.itemname} within the{" "}
                  {item.category} classification.
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 gap-px bg-border border border-border">
                {item.itemprops.map((prop) => (
                  <div
                    key={prop.label}
                    className="group bg-surface hover:bg-bg p-8 sm:p-10 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-4"
                  >
                    <dt className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover:text-primary transition-colors">
                      {prop.label}
                    </dt>
                    <dd className="text-3xl sm:text-5xl font-black text-text tracking-tighter leading-none wrap-break-word">
                      {prop.value}
                    </dd>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-16">
                <Link
                  to="/"
                  className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.3em] text-muted hover:text-primary transition-all group"
                >
                  <LucideIcons.ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-2 transition-transform text-primary"
                  />
                  Back to Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
