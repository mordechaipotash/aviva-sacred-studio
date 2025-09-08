'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const commissionTypes = [
  {
    id: 'lifecycle',
    title: 'Lifecycle Celebrations',
    icon: '🎭',
    description: 'Wedding ceremonies, Bar/Bat Mitzvahs, and other sacred milestones',
    examples: ['Chuppah ceremony paintings', 'Torah reading moments', 'Family celebration scenes'],
    timeframe: '6-12 weeks',
    investment: '$2,500 - $4,500'
  },
  {
    id: 'memorial',
    title: 'Memorial & Remembrance',
    icon: '💔',
    description: 'Honoring beloved souls and sacred memory through art',
    examples: ['Memorial portraits with spiritual elements', 'Yahrzeit commemoration pieces', 'Legacy tribute works'],
    timeframe: '4-8 weeks',
    investment: '$1,500 - $3,500'
  },
  {
    id: 'institutional',
    title: 'Sacred Spaces',
    icon: '🏛️',
    description: 'Synagogues, Jewish centers, and community spaces',
    examples: ['Ark covers and Torah mantles', 'Wall installations for prayer spaces', 'Community gathering artwork'],
    timeframe: '8-16 weeks',
    investment: '$3,500 - $8,000'
  },
  {
    id: 'home',
    title: 'Home Sanctification',
    icon: '🏠',
    description: 'Sacred art for private family spaces and personal meditation',
    examples: ['Dining room focal pieces', 'Study room inspirations', 'Bedroom blessing paintings'],
    timeframe: '4-10 weeks',
    investment: '$1,200 - $3,200'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Heart Consultation',
    description: 'We discuss your vision, the sacred moment or space, and what the piece means to you.',
    duration: '1-2 weeks'
  },
  {
    step: 2,
    title: 'Sacred Creation',
    description: 'I pray, plan, and begin the physical creation of your piece with regular updates.',
    duration: '4-12 weeks'
  },
  {
    step: 3,
    title: 'Blessing & Delivery',
    description: 'Final review, blessing of the completed work, and installation in your sacred space.',
    duration: '1 week'
  }
];

export function Commissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    occasion: '',
    timeline: '',
    budget: '',
    vision: '',
    dimensions: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Commission inquiry submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="commissions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="px-4 py-2 text-lg">
            Sacred Commissions 💎
          </Badge>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Create Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Commission a one-of-one original piece for your most sacred moments. 
              Each work is born from deep consultation, prayer, and collaborative vision.
            </p>
          </div>
        </div>

        {/* Commission Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {commissionTypes.map((type) => (
            <Card key={type.id} className="border-2 border-transparent hover:border-secondary/30 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-primary">Examples:</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {type.examples.map((example, index) => (
                      <li key={index}>• {example}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeframe:</span>
                    <span className="font-medium">{type.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment:</span>
                    <span className="font-medium">{type.investment}</span>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-secondary text-secondary hover:bg-secondary/10"
                    >
                      Begin Consultation
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gradient">
                        {type.icon} {type.title} Commission
                      </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="occasion">Occasion/Purpose *</Label>
                          <Input
                            id="occasion"
                            placeholder="Wedding, memorial, new home, etc."
                            value={formData.occasion}
                            onChange={(e) => setFormData(prev => ({...prev, occasion: e.target.value}))}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vision">Your Vision *</Label>
                        <Textarea
                          id="vision"
                          placeholder="Describe what you envision - the story, the feeling, the spiritual meaning you want to capture..."
                          value={formData.vision}
                          onChange={(e) => setFormData(prev => ({...prev, vision: e.target.value}))}
                          rows={4}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Preferred Timeline</Label>
                          <Input
                            id="timeline"
                            placeholder="When do you need this completed?"
                            value={formData.timeline}
                            onChange={(e) => setFormData(prev => ({...prev, timeline: e.target.value}))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Investment Range</Label>
                          <Input
                            id="budget"
                            placeholder="Your budget range"
                            value={formData.budget}
                            onChange={(e) => setFormData(prev => ({...prev, budget: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dimensions">Preferred Size</Label>
                          <Input
                            id="dimensions"
                            placeholder="e.g., 24x36 inches"
                            value={formData.dimensions}
                            onChange={(e) => setFormData(prev => ({...prev, dimensions: e.target.value}))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            placeholder="Where will this hang?"
                            value={formData.location}
                            onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                          />
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                        <p className="font-medium mb-2">What happens next:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Personal consultation call within 48 hours</li>
                          <li>• Discussion of vision, timeline, and investment</li>
                          <li>• Collaborative refinement of concept</li>
                          <li>• Sacred creation process begins</li>
                        </ul>
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 sacred-glow text-lg py-6">
                        Begin Sacred Consultation 🙏
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">The Sacred Process</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every commission follows a thoughtful, collaborative journey from heart to home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="border-2 border-secondary/20 sacred-glow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 sacred-glow">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </CardContent>
                </Card>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-secondary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient">
              Ready to Create Something Sacred?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every commission begins with a conversation. Share your vision, and let&apos;s explore 
              how we can bring your sacred moment to life through art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 sacred-glow px-8 py-6 text-lg">
                    Start Your Commission Journey 💎
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl text-gradient">Choose Your Sacred Path</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3 mt-6">
                    {commissionTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant="outline"
                        className="w-full justify-start border-secondary/30 hover:bg-secondary/10"
                      >
                        <span className="mr-3">{type.icon}</span>
                        {type.title}
                      </Button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg">
                View Commission Gallery 🎨
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}