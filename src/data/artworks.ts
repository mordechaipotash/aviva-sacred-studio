export interface Artwork {
  id: string;
  title: string;
  hebrewTitle: string;
  description: string;
  story: string;
  medium: string;
  dimensions: string;
  price: string;
  category: 'biblical' | 'contemporary' | 'sacred-moments' | 'blessing';
  image: string;
  available: boolean;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 'jerusalem-gold',
    title: 'Jerusalem of Gold',
    hebrewTitle: 'ירושלים של זהב',
    description: 'The City of Jerusalem in rich palette of deep blue, gold, and purple, created with oil, pastel, acrylic paints, and gold leaf.',
    story: 'This painting portrays the City of Jerusalem with textured layers and shimmering gold that evoke the city\'s timeless beauty, holiness, and spiritual radiance. The combination of mediums gives depth, luminosity, and movement to the architecture and landscape, capturing both the majesty of the city and its soulful, eternal presence.',
    medium: 'Oil, pastel, acrylic paints, and gold leaf',
    dimensions: '24" x 36"',
    price: 'Investment inquiry',
    category: 'biblical',
    image: 'https://picsum.photos/800/600?random=1',
    available: true,
    featured: true
  },
  {
    id: 'splitting-sea',
    title: 'Into His Protection',
    hebrewTitle: 'עמוד האש',
    description: 'Kriyat Yam Suf with the Pillar of Fire extending beyond the canvas, symbolizing Am Yisrael\'s journey toward receiving the Torah.',
    story: 'This painting, created primarily with oil paints and accented with acrylic, portrays the splitting of the sea. At the forefront blazes the Pillar of Fire, extending beyond the canvas itself—symbolizing Am Yisrael\'s journey beyond the sea, into Hashem\'s protection, and toward the ultimate receiving of the Torah.',
    medium: 'Oil and acrylic paints',
    dimensions: '30" x 40"',
    price: 'Investment inquiry',
    category: 'biblical',
    image: 'https://picsum.photos/800/600?random=2',
    available: true
  },
  {
    id: 'blessing-hands',
    title: 'You Open Your Hand',
    hebrewTitle: 'פותח את ידך… רצון',
    description: 'A diptych representing happiness and blessing even in a world of pain and suffering, showing hands giving and receiving.',
    story: 'These artworks are a set that represent happiness and blessing even in a world of pain and suffering, reflecting the recognition of Hashem\'s endless goodness. One image shows hands overflowing with fruit in a giving gesture, bright and colorful. The second shows hands open to receive, catching rain—darker tones surround the scene, making the bright, hopeful rain stand out as divine grace.',
    medium: 'Mixed media with acrylics',
    dimensions: '20" x 24" each (diptych)',
    price: 'Investment inquiry',
    category: 'blessing',
    image: 'https://picsum.photos/800/600?random=3',
    available: true
  },
  {
    id: 'soldier-torah',
    title: 'Guardian of the Sacred',
    hebrewTitle: 'שומר הקודש',
    description: 'Israeli soldier tenderly holding a Sefer Torah, representing the bond between Am Yisrael, Torat Yisrael, and Eretz Yisrael.',
    story: 'An Israeli soldier tenderly holding a Sefer Torah, with love and devotion. The image reflects the deep bond between Am Yisrael, Torat Yisrael, and Eretz Yisrael. It serves as a tribute, representing Hirsch, Polin, and Goldberg, honoring their memory and legacy.',
    medium: 'Acrylic with mixed media',
    dimensions: '18" x 24"',
    price: 'Investment inquiry',
    category: 'contemporary',
    image: 'https://picsum.photos/800/600?random=4',
    available: true
  },
  {
    id: 'chuppah-union',
    title: 'And They Shall Become One Flesh',
    hebrewTitle: 'והיו לבשר אחד',
    description: 'A religious Jewish couple beneath the chuppah, surrounded by light, holiness, and blessing.',
    story: 'This painting depicts a religious Jewish couple standing beneath the chuppah, surrounded by light, holiness, and blessing. The moment represents not only the union of two individuals, but also the timeless covenant of Am Yisrael—building a home of Torah, faith, and joy. The rough, expressive strokes convey the raw emotion and sacred energy beneath the chuppah.',
    medium: 'Oil and acrylic',
    dimensions: '22" x 28"',
    price: 'Investment inquiry',
    category: 'sacred-moments',
    image: 'https://picsum.photos/800/600?random=5',
    available: true
  },
  {
    id: 'kotel-prayer',
    title: 'Gold in the Cracks',
    hebrewTitle: 'זָהָב בַּסְּדָקִים',
    description: 'Two religious men praying at the Kotel with gold leaf shimmering in the cracks of the wall.',
    story: 'This painting depicts two religious men praying at the Kotel, with gold leaf shimmering in the cracks of the wall, representing prayer notes tucked into the stones. The gold symbolizes both divine presence and the preciousness of heartfelt prayer. The title reflects how divine light and grace emerge even through imperfection and human yearning.',
    medium: 'Mixed media with gold leaf',
    dimensions: '26" x 32"',
    price: 'Investment inquiry',
    category: 'biblical',
    image: 'https://picsum.photos/800/600?random=6',
    available: true
  }
];

export const categories = [
  { id: 'all', name: 'All Collections', icon: '🎨' },
  { id: 'biblical', name: 'Miracles & Memory', icon: '🌊' },
  { id: 'contemporary', name: 'Light in Darkness', icon: '🕯️' },
  { id: 'sacred-moments', name: 'Sacred Moments', icon: '💝' },
  { id: 'blessing', name: 'Blessing & Abundance', icon: '🤲' }
];