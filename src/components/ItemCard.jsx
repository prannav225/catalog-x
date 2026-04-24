import { useNavigate } from "react-router-dom";
import { getCategoryMeta } from "../data/catalog";
import * as LucideIcons from "lucide-react";

export default function ItemCard({ item }) {
  const navigate = useNavigate();
  const meta = getCategoryMeta(item.category);
  const IconComponent = LucideIcons[meta.icon] || LucideIcons.Package;

  const handleClick = () => {
    navigate(`/item/${encodeURIComponent(item.itemname)}`);
  };

  return (
    <article
      id={`item-card-${item.itemname.replace(/\s+/g, "-").toLowerCase()}`}
      onClick={handleClick}
      className="group relative flex flex-col h-full bg-surface border border-border rounded-sm overflow-hidden cursor-pointer hover:border-primary transition-all duration-300"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      {/* Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-bg">
        <div className="absolute inset-0 shimmer-mask opacity-10 z-0" />
        <img
          src={item.image}
          alt={item.itemname}
          className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/1c1d21/94a3b8?text=${encodeURIComponent(item.itemname)}`;
          }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-30">
          <div className="flex items-center gap-2 px-2 py-1 bg-surface/90 backdrop-blur-sm border border-border text-[9px] font-bold uppercase tracking-widest text-text">
            <IconComponent size={10} className="text-primary" />
            <span>{item.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 sm:p-6 z-10">
        <h3 className="text-xl font-black text-text mb-4 line-clamp-1 group-hover:text-primary transition-colors">
          {item.itemname}
        </h3>

        {/* Specs Table-like display */}
        <div className="space-y-2 mb-6">
          {item.itemprops.slice(0, 2).map((prop) => (
            <div
              key={prop.label}
              className="flex items-center justify-between py-1.5 border-b border-border/50"
            >
              <span className="text-[9px] uppercase tracking-widest text-muted font-bold">
                {prop.label}
              </span>
              <span className="text-xs font-semibold text-text truncate max-w-[120px]">
                {prop.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-[9px] font-bold text-muted uppercase tracking-widest">
              ID: {item.itemprops.length}X
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
            View Entry
            <LucideIcons.ArrowRight size={14} />
          </div>
        </div>
      </div>
    </article>
  );
}
