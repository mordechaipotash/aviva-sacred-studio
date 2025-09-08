'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function ArtistProfile() {
  const achievements = [
    { icon: '🏆', title: 'Competition Winner', desc: 'Various art competitions before formal study' },
    { icon: '🎓', title: 'Formal Training', desc: 'Four years at Start Art School' },
    { icon: '🎨', title: 'Multi-Medium Mastery', desc: 'Oil, acrylic, spray paint, watercolor, gold leaf, and more' },
    { icon: '✨', title: 'Spiritual Focus', desc: 'Faith-centered approach to contemporary art' }
  ];

  const techniques = [
    'Oil Painting',
    'Acrylic Medium',
    'Watercolor',
    'Gold Leaf Application',
    'Mixed Media Layering',
    'Spray Paint Techniques',
    'Oil Pastels',
    'Charcoal Work',
    'Colored Pencil',
    'Texture Creation'
  ];

  return (
    <section id="artist" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            The Artist 👩‍🎨
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Aviva's Sacred Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where natural talent meets divine inspiration, creating contemporary Jewish art that bridges ancient wisdom with modern expression.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Artist Image & Quote */}
          <div className="space-y-8">
            <Card className="overflow-hidden border-2 border-secondary/20 sacred-glow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://picsum.photos/400/500?random=10"
                    alt="Aviva in her studio"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-sm opacity-90">In the Sacred Studio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artist Quote */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="text-6xl text-secondary/20 font-serif">"</div>
                  <blockquote className="text-lg italic leading-relaxed -mt-8">
                    At the core of my work is my faith in God. I see art as a way to connect the physical with the spiritual, 
                    and I strive to let my pieces reflect both inner emotions and a higher sense of purpose. Through color, 
                    texture, and form, I aim to create work that not only expresses my own feelings but also resonates with 
                    others on a soulful level.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">— Aviva</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artist Story & Details */}
          <div className="space-y-8">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">A Lifelong Calling</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Art has been central to my life from the beginning—a gift I've nurtured and developed over the years. 
                  Even before my formal training, I was winning competitions, driven by a natural talent that felt like 
                  a divine blessing.
                </p>
                <p>
                  After four years of dedicated study at Start Art School, I deepened my technical skills while never 
                  losing sight of what truly moves me: the sacred connection between creativity and faith. My work spans 
                  a wide range of mediums, each chosen for its ability to express the spiritual depth I seek to convey.
                </p>
                <p>
                  Today, I create contemporary Jewish art that speaks to our current moment while honoring timeless 
                  spiritual truths. Each piece is born from prayer, shaped by technique, and offered as a bridge between 
                  the seen and unseen worlds.
                </p>
              </div>
            </div>

            <Separator />

            {/* Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Recognition & Training</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-muted-foreground/20 hover:border-secondary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Techniques */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Artistic Mastery</h3>
              <p className="text-muted-foreground">
                My experimental and expressive process draws from a diverse range of mediums, often layering materials 
                to create texture, depth, and richness that serves the spiritual narrative.
              </p>
              <div className="flex flex-wrap gap-2">
                {techniques.map((technique, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {technique}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-secondary/20">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold text-gradient">Connect with the Artist</h4>
                <p className="text-sm text-muted-foreground">
                  Interested in commissioning a piece or learning more about the creative process?
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-primary hover:bg-primary/90 sacred-glow">
                    Commission Inquiry 💎
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                    Studio Updates 📝
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}