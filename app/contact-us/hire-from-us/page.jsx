'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import pointersData from '@/data/hire-from-us-pointers.json';

export default function HireFromUsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact-expert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact request');
      }

      toast({
        title: 'Submitted',
        description: 'Thank you for your interest in Adalabs! Our team will reach out to you soon.',
      });

      setFormData({ name: '', email: '', message: '' });
      setIsFormOpen(false); // Close modal after successful submission
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: error.message || 'An error occurred while submitting your request.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-white/80">Hire Developers from Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Build Your Dream Team with Adalabs</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Hire top-tier developers from Adalabs to bring your projects to life. Our skilled professionals deliver innovative software, web, and application solutions tailored to your needs.
          </p>
        </div>

        {/* Why Partner With Us */}
        <div className="premium-card p-8 mb-16">
          <h3 className="text-2xl font-bold gradient-text mb-6">Why Partner With Us for Your Development Needs</h3>
          <p className="text-white/80 mb-6">
            Choosing the right development partner is critical to your project's success. At Adalabs, we offer more than just technical talent — we deliver reliability, expertise, and long-term value. Here’s why global businesses trust us:
          </p>
          <ul className="space-y-6">
            {pointersData.map((pointer, index) => (
              <li key={index}>
                <h4 className="text-xl font-semibold text-white/80">{`${index + 1}. ${pointer.title}`}</h4>
                <p className="text-white/60">{pointer.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <Button
            size="lg"
            className="premium-button px-12 py-3 rounded-xl"
            onClick={() => setIsFormOpen(true)}
          >
            Talk to an Expert
          </Button>
        </div>

        {/* Contact Form Modal */}
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="premium-card p-8 max-w-3xl mx-auto bg-black/90 border-white/10 backdrop-blur-md transition-none">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold gradient-text text-center">
                Connect with Our Team
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white/80">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/80">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white/80">Message</Label>
                <Input
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  placeholder="Tell us about your project needs"
                />
              </div>
              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full premium-button px-8 py-3 rounded-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}