'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface StudioNote {
  id: string;
  date: string;
  title: string;
  content: string;
  mood: 'contemplative' | 'joyful' | 'reflective' | 'inspired';
  image?: string;
}

const studioNotes: StudioNote[] = [
  {
    id: '1',
    date: '2025-09-07',
    title: 'Working with Gold Leaf Today',
    content: 'There\'s something magical about applying gold leaf - it reminds me that even the most precious materials are just vessels for something greater. Today I\'m adding the final touches to "Gold in the Cracks," and I can feel how the light wants to dance through every imperfection in the wall...',
    mood: 'contemplative'
  },
  {
    id: '2', 
    date: '2025-09-06',
    title: 'The Bibas Children in My Heart',
    content: 'I can\'t stop thinking about the Bibas children as I work on the candle piece. Their light - their neshamas - live on for eternity. Every brushstroke is a prayer for their souls and a hope that we will see redemption soon. The orange and green represent our army, but the red... the red is for their hair, their memory, their eternal light.',
    mood: 'reflective'
  },
  {
    id: '3',
    date: '2025-09-05', 
    title: 'Hands That Give and Receive',
    content: 'Started the "פותח את ידך" series today. One canvas shows hands overflowing with fruit - bright, generous, giving. The other will be hands open to catch rain, surrounded by darkness but with that beautiful, hopeful light falling down. It\'s about recognizing Hashem\'s goodness even when the world feels heavy.',
    mood: 'inspired'
  },
  {
    id: '4',
    date: '2025-09-04',
    title: 'Chuppah Dreams',
    content: 'A young couple commissioned a piece for their upcoming wedding, and my heart is so full! To be part of their sacred moment, to create something that will hang in their home and witness their joys and challenges... This is why I paint. "והיו לבשר אחד" - and they shall become one flesh. The brushstrokes need to capture that raw emotion, that holy energy.',
    mood: 'joyful'
  }
];

const moodColors = {
  contemplative: 'bg-blue-500/10 text-blue-700 border-blue-200',
  joyful: 'bg-yellow-500/10 text-yellow-700 border-yellow-200', 
  reflective: 'bg-purple-500/10 text-purple-700 border-purple-200',
  inspired: 'bg-green-500/10 text-green-700 border-green-200'
};

export function StudioNotes() {
  return (
    <section id="studio-notes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            Studio Notes 📝
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Join the Creative Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Intimate glimpses into the sacred studio - where inspiration meets canvas, 
              and every piece begins as a conversation with the Divine.
            </p>
          </div>
        </div>

        {/* Notes Feed */}
        <div className="max-w-4xl mx-auto space-y-8">
          {studioNotes.map((note, index) => (
            <Card key={note.id} className="overflow-hidden border-2 border-transparent hover:border-secondary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Badge className={moodColors[note.mood]}>
                          {note.mood}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(note.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{note.title}</h3>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center sacred-glow">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{note.content}"
                    </p>
                  </div>

                  {/* Interaction */}
                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <button className="hover:text-primary transition-colors flex items-center space-x-1">
                        <span>💙</span>
                        <span>{index + 8}</span>
                      </button>
                      <button className="hover:text-primary transition-colors flex items-center space-x-1">
                        <span>💬</span>
                        <span>Share thoughts</span>
                      </button>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-secondary hover:bg-secondary/10">
                      Learn more about this piece →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8">
            Load Earlier Entries
          </Button>
        </div>

        {/* Subscribe Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-secondary/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gradient">
                  Never Miss a Sacred Moment
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Get intimate studio updates, see works in progress, and be the first to know when 
                  new pieces are available for loving homes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-secondary/30 bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <Button className="bg-primary hover:bg-primary/90 sacred-glow px-8 py-3">
                  Join the Journey ✨
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Sacred updates only. No spam. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}