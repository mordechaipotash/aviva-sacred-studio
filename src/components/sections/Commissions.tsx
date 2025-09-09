'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const commissionedWorks = [
  { id: 1, image: 'https://picsum.photos/400/500?random=20' },
  { id: 2, image: 'https://picsum.photos/400/500?random=21' },
  { id: 3, image: 'https://picsum.photos/400/500?random=22' },
  { id: 4, image: 'https://picsum.photos/400/500?random=23' },
  { id: 5, image: 'https://picsum.photos/400/500?random=24' },
  { id: 6, image: 'https://picsum.photos/400/500?random=25' },
];

export function Commissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vision: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Commission inquiry:', formData);
  };

  return (
    <section id="commission" className="min-h-screen bg-white">
      {/* Commission Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {commissionedWorks.map((work) => (
          <div key={work.id} className="relative aspect-[4/5]">
            <Image
              src={work.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Simple Form */}
      <div id="contact" className="bg-gray-50 py-20">
        <div className="max-w-md mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="border-gray-300 focus:border-gray-500"
              required
            />
            
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="border-gray-300 focus:border-gray-500"
              required
            />
            
            <Textarea
              placeholder="Tell me about your vision"
              value={formData.vision}
              onChange={(e) => setFormData({...formData, vision: e.target.value})}
              className="border-gray-300 focus:border-gray-500 min-h-32"
              required
            />
            
            <Button 
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}