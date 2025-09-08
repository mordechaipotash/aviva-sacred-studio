# 🎨 Sacred Studio by Aviva

A luxury art portfolio website showcasing contemporary Jewish art that bridges ancient wisdom with modern expression.

![Sacred Studio](https://img.shields.io/badge/Sacred%20Studio-Contemporary%20Jewish%20Art-gold?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🏠 **Luxury Portfolio Experience**
- **Hero Carousel** - Auto-playing showcase with sacred art imagery
- **Filterable Gallery** - Collections organized by spiritual themes
- **Immersive Artwork Cards** - Hover effects with story previews
- **Commission System** - Full inquiry flow for custom sacred art

### 💎 **Business-Focused Design**
- **Premium Positioning** - $1K-$5K original artwork pricing
- **No Visible Pricing** - "Investment inquiry" approach for luxury sales
- **Emotional Storytelling** - Hebrew titles with spiritual narratives
- **Collector Experience** - Social proof and testimonial sections

### 📱 **Technical Excellence**
- **Fully Responsive** - Mobile-first design with touch interactions
- **Modern UI Framework** - Built with shadcn/ui components
- **Performance Optimized** - Fast loading with smooth animations
- **SEO Ready** - Proper meta tags for art collector discovery

## 🎯 **For the Artist**

This website embodies Aviva's authentic voice:
- **Faith-Centered** - Every element honors the spiritual foundation
- **Story-First** - Meaning precedes commerce in every interaction  
- **Community Building** - WhatsApp-style intimacy in studio updates
- **Professional Quality** - Ready to command premium prices

## 🛠️ **Built With**

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Embla Carousel](https://www.embla-carousel.com/)** - Touch-friendly carousels

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mordechaipotash/aviva-sacred-studio.git

# Navigate to project directory
cd aviva-sacred-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── artwork/           # Gallery & artwork components
│   ├── sections/          # Page sections
│   └── ui/               # shadcn/ui components
└── data/
    └── artworks.ts       # Artwork data & types
```

## 🎨 **Design System**

### Color Palette
- **Primary**: Deep Sapphire `#1a237e` - Spiritual depth
- **Secondary**: Warm Gold `#b8860b` - Matches gold leaf in artwork
- **Background**: Warm Cream `#faf7f2` - Gallery wall aesthetic
- **Accent**: Soft Coral `#ff7043` - Life and warmth

### Typography
- **Headlines**: Playfair Display - Elegant serif for artistic feel
- **Body**: Inter - Clean, readable sans-serif
- **Hebrew**: David Libre - Authentic Hebrew text rendering

## 🔧 **Customization**

### Adding Artwork
1. Add artwork data to `src/data/artworks.ts`
2. Include high-resolution images in `public/artwork/`
3. Update category filters if needed

### Modifying Content
- **Artist Bio**: `src/components/sections/ArtistProfile.tsx`
- **Studio Notes**: `src/components/sections/StudioNotes.tsx`
- **Commission Types**: `src/components/sections/Commissions.tsx`

### Styling
- **Colors**: Update CSS variables in `src/app/globals.css`
- **Components**: Modify shadcn/ui components in `src/components/ui/`

## 📈 **Deployment**

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mordechaipotash/aviva-sacred-studio)

### Other Platforms
The site works on any platform supporting Next.js:
- Netlify
- AWS Amplify  
- Railway
- DigitalOcean App Platform

## 💰 **Business Model**

**Target Market**: Affluent Jewish families, synagogues, art collectors
**Price Range**: $1,200 - $8,000 USD for originals
**Strategy**: Emotional connection first, commerce second

### Sales Funnel
1. **Discovery** - Browse gallery by spiritual theme
2. **Connection** - Read artwork stories and artist journey  
3. **Inquiry** - Private consultation for available pieces
4. **Commission** - Custom work for special occasions

## 🤝 **Contributing**

This is a portfolio project, but suggestions are welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/enhancement`)
3. Commit changes (`git commit -m 'Add enhancement'`)
4. Push to branch (`git push origin feature/enhancement`)
5. Open a Pull Request

## 📄 **License**

This project is for portfolio demonstration. All artwork and content belong to the artist Aviva.

## 🙏 **Acknowledgments**

- **Aviva** - For sharing her sacred artistic vision
- **shadcn** - For the beautiful UI component library
- **Next.js Team** - For the excellent React framework
- **Vercel** - For deployment and hosting platform

---

*"At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual."* — Aviva

**🔗 Live Demo**: [Coming Soon]
**📧 Contact**: [Artist Inquiry Form](mailto:contact@sacred-studio-aviva.com)