import ItemCard from "./ItemCard";
import { getCategoryMeta } from "../data/catalog";
import * as LucideIcons from "lucide-react";

export default function CategorySection({ category, items }) {
  const meta = getCategoryMeta(category);
  const IconComponent = LucideIcons[meta.icon] || LucideIcons.Package;

  return (
    <section id={`category-${category.toLowerCase()}`} className="scroll-mt-32">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 mb-12 border-l-4 border-primary pl-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-muted">
            <IconComponent size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Archive Classification
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black text-text tracking-tighter leading-none">
            {category}
          </h2>
        </div>

        <div className="flex items-center gap-4 py-2 px-6 border border-border bg-surface self-start sm:self-end shadow-sm">
          <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
            Count
          </span>
          <div className="w-px h-4 bg-border" />
          <span className="text-xl font-serif font-black italic">
            {items.length}
          </span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {items.map((item) => (
          <ItemCard key={item.itemname} item={item} />
        ))}
      </div>
    </section>
  );
}
