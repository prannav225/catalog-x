import rawData from './Data.json';

export const catalogData = rawData;

/** Returns a deduplicated list of category names */
export const getCategories = () => {
  return [...new Set(rawData.map((item) => item.category))];
};

/** Groups items by category */
export const getItemsByCategory = () => {
  return rawData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
};

/** Returns a single item by name (URL-safe slug comparison) */
export const getItemBySlug = (slug) => {
  return rawData.find(
    (item) =>
      encodeURIComponent(item.itemname) === slug ||
      item.itemname === decodeURIComponent(slug),
  );
};

/** Category meta — icons & gradient colours */
export const categoryMeta = {
  Cars: {
    icon: 'Car',
    gradient: 'from-primary/20 to-accent/20',
    accent: '#F9A03F', // Brand Accent
    badge: 'bg-accent/15 text-accent border-accent/30',
    glow: 'rgba(249,160,63,0.25)',
  },
  Bikes: {
    icon: 'Bike',
    gradient: 'from-primary/20 to-accent/20',
    accent: '#F9A03F',
    badge: 'bg-accent/15 text-accent border-accent/30',
    glow: 'rgba(249,160,63,0.25)',
  },
  Phones: {
    icon: 'Smartphone',
    gradient: 'from-primary/20 to-accent/20',
    accent: '#F9A03F',
    badge: 'bg-accent/15 text-accent border-accent/30',
    glow: 'rgba(249,160,63,0.25)',
  },
  Computers: {
    icon: 'Laptop',
    gradient: 'from-primary/20 to-accent/20',
    accent: '#F9A03F',
    badge: 'bg-accent/15 text-accent border-accent/30',
    glow: 'rgba(249,160,63,0.25)',
  },
};

export const getCategoryMeta = (category) =>
  categoryMeta[category] ?? {
    icon: 'Package',
    gradient: 'from-slate-500/20 to-gray-500/20',
    accent: '#94a3b8',
    badge: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
    glow: 'rgba(148,163,184,0.25)',
  };
