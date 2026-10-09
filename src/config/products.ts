export const products = [
  {
    slug: 'sentinel',
    name: 'The Sentinel',
    price: '$185',
    category: 'Cap-toe Oxford',
    origin: 'Elda, Spain',
    construction: 'Goodyear Welt',
    materials: 'Italian LWG Gold calfskin, cork, leather sole',
    image: '/logo_concept_01.webp',
    description: 'A timeless silhouette that anchors any professional wardrobe. Handcrafted with traditional Goodyear welt construction for a lifetime of service.',
    breakdown: {
      retail: 185,
      components: [
        { label: 'Materials', description: 'Italian LWG Gold calfskin, cork, leather sole', cost: 34, percent: 18 },
        { label: 'Labor', description: 'Goodyear welted by artisans in Elda, Spain', cost: 24, percent: 13 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 12, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 74
    }
  },
  {
    slug: 'pivot',
    name: 'The Pivot',
    price: '$175',
    category: 'Penny Loafer',
    origin: 'Ubrique, Spain',
    construction: 'Blake Stitch',
    materials: 'Spanish suede, Blake-stitch components',
    image: '/logo_concept_02.webp',
    description: 'Effortless versatility for the office or the weekend. The Blake-stitch construction provides immediate comfort and flexibility without sacrificing durability.',
    breakdown: {
      retail: 175,
      components: [
        { label: 'Materials', description: 'Spanish suede, Blake-stitch components', cost: 28, percent: 16 },
        { label: 'Labor', description: 'Hand-stitched in Ubrique, Spain', cost: 18, percent: 10 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 12, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 62
    }
  },
  {
    slug: 'compass',
    name: 'The Compass',
    price: '$155',
    category: 'Minimalist Sneaker',
    origin: 'Porto, Portugal',
    construction: 'Sustainable Cupsole',
    materials: 'Recycled rubber, organic cotton, eco-leather',
    image: '/color_palette_moodboard.webp',
    description: 'Clean lines and sustainable materials for the modern commute. Designed in London and assembled in Porto using recycled components.',
    breakdown: {
      retail: 155,
      components: [
        { label: 'Materials', description: 'Recycled rubber, organic cotton, eco-leather', cost: 14, percent: 9 },
        { label: 'Labor', description: 'Sustainable assembly in Porto, Portugal', cost: 10, percent: 6 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 10, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 3 },
      ],
      totalCost: 38
    }
  },
  {
    slug: 'anchor',
    name: 'The Anchor',
    price: '$215',
    category: 'Chelsea Boot',
    origin: 'Elda, Spain',
    construction: 'Goodyear Welt',
    materials: 'Italian LWG Gold calfskin, rugged welt',
    image: '/brand_moodboard.webp',
    description: 'A rugged yet refined boot that stands its ground. Featuring premium Italian calfskin and a heavy-duty Goodyear welt for maximum durability.',
    breakdown: {
      retail: 215,
      components: [
        { label: 'Materials', description: 'Italian LWG Gold calfskin, rugged welt', cost: 38, percent: 18 },
        { label: 'Labor', description: 'Goodyear welted by artisans in Elda, Spain', cost: 25, percent: 12 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 15, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 82
    }
  }
];
