import { getCategories } from '../data/catalog';
import { useTheme } from '../context/ThemeContext';

export default function CategoryNav() {
  const categories = getCategories();
  const { theme } = useTheme();

  const scrollTo = (id) => {
    const element = document.getElementById(`category-${id.toLowerCase()}`);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
