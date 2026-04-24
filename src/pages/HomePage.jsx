import { getItemsByCategory } from "../data/catalog";
import CategorySection from "../components/CategorySection";
import CategoryNav from "../components/CategoryNav";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const grouped = getItemsByCategory();
  const categories = Object.keys(grouped);
  const totalItems = Object.values(grouped).reduce((s, a) => s + a.length, 0);

  return (
    <div className="page-transition pt-16">
      {/* Editorial Hero */}
      <section className="relative py-24 sm:py-32 border-b border-border bg-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border bg-surface shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                Premium Specification Directory
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-balance">
                The Archive of <br />
                <span className="text-primary italic">Industrial</span>{" "}
                Excellence.
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-xl font-medium leading-relaxed">
                A highly structured technical database featuring {totalItems}{" "}
                curated entries across automotive and technological disciplines.
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("catalog-content")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase text-xs tracking-widest hover:bg-accent transition-all"
              >
                Browse Collection
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>

              <div className="hidden sm:block text-left">
                <span className="block text-[10px] font-bold text-muted uppercase tracking-widest">
                  Database Capacity
                </span>
                <span className="text-xl font-serif font-bold italic">
                  {totalItems} Live Specs
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-primary/5 -rotate-2 rounded-sm scale-105 group-hover:rotate-0 transition-transform duration-700" />

            {/* Featured Card */}
            <div className="relative aspect-4/3 bg-surface border border-border shadow-2xl p-0 overflow-hidden flex flex-col">
              <div className="relative h-2/3 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000"
                  alt="Featured Asset"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-surface/90 border border-border text-[9px] font-black uppercase tracking-widest text-primary">
                  Featured Asset
                </div>
              </div>

              <div className="grow p-8 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-muted uppercase tracking-[0.3em]">
                    Automotive Archive // 01
                  </span>
                  <h3 className="text-4xl font-black tracking-tighter">
                    Tesla Model 3
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex gap-8">
                    <div>
                      <span className="block text-[8px] font-bold text-muted uppercase tracking-widest">
                        Range
                      </span>
                      <span className="text-sm font-serif font-bold italic">
                        341 Miles
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-bold text-muted uppercase tracking-widest">
                        Acceleration
                      </span>
                      <span className="text-sm font-serif font-bold italic">
                        3.1s 0-60
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/item/Tesla%20Model%203"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                  >
                    Explore Entry
                    <ArrowDown className="-rotate-90" size={14} />
                  </Link>
                </div>
              </div>

              {/* Scanning Effect Overlay */}
              <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-primary/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-black">Categories</h2>
              <p className="text-muted font-medium">
                Filter the archive by technical classification.
              </p>
            </div>
            <CategoryNav />
          </div>
        </div>

        <main id="catalog-content" className="space-y-40">
          {categories.map((category) => (
            <CategorySection
              key={category}
              category={category}
              items={grouped[category]}
            />
          ))}
        </main>

        <footer className="mt-40 pt-20 border-t border-border pb-20 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs space-y-6">
            <Link
              to="/"
              id="nav-logo"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <span className="font-serif text-xl font-bold tracking-tight">
                Catalog<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              The industry standard for multi-category technical documentation
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-muted">
              Directory
            </h4>
            <ul className="flex flex-wrap md:flex-col gap-x-8 gap-y-2 text-sm font-medium">
              {categories.map((c) => (
                <li key={c} className="hover:text-primary transition-colors">
                  <a href={`#category-${c.toLowerCase()}`}>{c}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
