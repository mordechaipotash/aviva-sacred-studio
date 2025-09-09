export interface Artwork {
  id: number;
  image: string;
  title: string;
  hebrewTitle?: string;
  description: string;
  medium?: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    image: 'https://picsum.photos/400/500?random=10',
    title: 'Jerusalem of Gold',
    hebrewTitle: 'ירושלים של זהב',
    description: 'This painting portrays the City of Jerusalem in a rich palette of deep blue, gold, and purple, created with a blend of oil, pastel, acrylic paints, and gold leaf. The textured layers and shimmering gold evoke the city\'s timeless beauty, holiness, and spiritual radiance.',
    medium: 'Oil, pastel, acrylic, gold leaf'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/500?random=11',
    title: 'Into His Protection',
    hebrewTitle: 'עמוד האש',
    description: 'This painting, created primarily with oil paints and accented with acrylic, portrays Kriyat Yam Suf, the splitting of the sea. At the forefront blazes the Pillar of Fire, extending beyond the canvas itself—symbolizing Am Yisrael\'s journey beyond the sea, into Hashem\'s protection, and toward the ultimate receiving of the Torah.',
    medium: 'Oil and acrylic'
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/500?random=12',
    title: 'Gold in the Cracks',
    hebrewTitle: 'זָהָב בַּסְּדָקִים',
    description: 'This painting depicts two religious men praying at the Kotel, rendered with gold leaf shimmering in the cracks of the wall, which also represents the prayer notes tucked into the stones. The gold symbolizes both the divine presence and the preciousness of heartfelt prayer.',
    medium: 'Mixed media with gold leaf'
  },
  {
    id: 4,
    image: 'https://picsum.photos/400/500?random=13',
    title: 'The Bibas Children\'s Light',
    hebrewTitle: '',
    description: 'This artwork is a large-scale piece that expresses hope, longing, and the eternal neshama of man, along with our everlasting connection to Hashem. At the center are two candles, their flames small yet protected within a cluster of people. These represent the Bibas children, whose souls live on for eternity.',
    medium: 'Acrylic with orange, green, and red tones'
  },
  {
    id: 5,
    image: 'https://picsum.photos/400/500?random=14',
    title: 'You Open Your Hand',
    hebrewTitle: 'פותח את ידך',
    description: 'These artworks are a set. In one image, hands overflowing with fruit are held in a giving gesture, bright and colorful, symbolizing abundance and generosity. The second image shows hands open to receive, catching rain—a receptacle for blessing.',
    medium: 'Mixed media'
  },
  {
    id: 6,
    image: 'https://picsum.photos/400/500?random=15',
    title: 'They Brought Light into the World',
    hebrewTitle: 'ועשו אור בעולם',
    description: 'The flames of the Beis Hamikdash-style menorah in my painting contain hidden scenes of Jews performing mitzvot—Kiddush Levana, Shabbos candle lighting, Torah study, prayer, bris milah, and marriage—the very acts the Greeks tried to suppress during the era of Chanukah.',
    medium: 'Oil with golden and copper palette'
  },
  {
    id: 7,
    image: 'https://picsum.photos/400/500?random=16',
    title: 'And They Shall Become One Flesh',
    hebrewTitle: 'והיו לבשר אחד',
    description: 'This painting depicts a religious Jewish couple standing beneath the chuppah, surrounded by light, holiness, and blessing. The rough, expressive strokes convey the raw emotion and sacred energy beneath the chuppah.',
    medium: 'Oil and acrylic'
  },
  {
    id: 8,
    image: 'https://picsum.photos/400/500?random=17',
    title: 'Israeli Soldier with Torah',
    hebrewTitle: '',
    description: 'An Israeli soldier tenderly holding a Sefer Torah, with love and devotion. The image reflects the deep bond between Am Yisrael, Torat Yisrael, and Eretz Yisrael. It also serves as a tribute, representing Hirsch, Polin, and Goldberg, honoring their memory and legacy.',
    medium: 'Mixed media'
  },
  {
    id: 9,
    image: 'https://picsum.photos/400/500?random=18',
    title: 'Splitting of the Red Sea',
    hebrewTitle: 'קריית ים סוף',
    description: 'This image depicts Kriyat Yam Suf — the splitting of the Red Sea. At the forefront stands Am Yisrael, with the people journeying toward their ultimate freedom: to live as devoted servants of the Creator of the world.',
    medium: 'Various techniques for texture'
  }
];