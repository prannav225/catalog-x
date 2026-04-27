import { getCategories } from "../data/catalog";
import { useCallback } from "react";

export default function CategoryNav() {
  const categories = getCategories();

  const scrollTo = useCallback((id) => {
    const element = document.getElementById(`category-${id.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the top of the element (honoring scroll-margin-top)
      });
    }
  }, []);

  return (
    <nav
      id="category-nav"
      aria-label="Category navigation"
      className="flex flex-wrap items-center gap-1 p-1 border border-border bg-surface/50 rounded-sm"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          id={`jump-${cat.toLowerCase()}`}
          onClick={() => scrollTo(cat)}
          className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-primary hover:bg-border/50 transition-all rounded-sm"
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}
