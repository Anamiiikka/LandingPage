'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, ArrowRight } from 'lucide-react';

export default function JoinTeamSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experience: '',
    resume: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    ) {
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      toast({
        title: 'Invalid File Type',
        description: 'Please upload a PDF or DOC file.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('resume', formData.resume);

      const response = await fetch('/api/join-team', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      toast({
        title: 'Submitted',
        description:
          'Thank you for your interest in Adalabs! We will review your application and get back to you soon.',
      });

      setFormData({ name: '', age: '', experience: '', resume: null });
      const fileInput = document.getElementById('resume');
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description:
          error.message || 'An error occurred while submitting your application.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-white/[0.02]" />
      <div className="floating-orb bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.01]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Join Our Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Shape the Future with Adalabs</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Join our innovative team to work on cutting-edge projects that make a real impact. Discover your potential and grow with us.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button asChild size="lg" className="premium-button px-8 py-3 rounded-xl">
            <a href="/careers">
              Explore Adalabs Careers
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-3 rounded-xl border-white/20 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            <a href="/about">
              Learn About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>

        {/* Form */}
        <div className="premium-card p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
            Submit Your Application
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white/80">
                Full Name
              </Label>
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
              <Label htmlFor="age" className="text-white/80">
                Age
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
                required
                min="18"
                className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="Enter your age"
              />
            </div>
            <div>
              <Label htmlFor="experience" className="text-white/80">
                Years of Experience
              </Label>
              <Input
                id="experience"
                name="experience"
                type="number"
                value={formData.experience}
                onChange={handleInputChange}
                required
                min="0"
                className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="Enter years of experience"
              />
            </div>
            <div>
              <Label htmlFor="resume" className="text-white/80">
                Resume/CV (PDF or DOC)
              </Label>
              <div className="mt-2">
                <label
                  htmlFor="resume"
                  className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
                >
                  <FileText className="w-5 h-5 text-white/60" />
                  <span className="text-white/80">
                    {formData.resume ? formData.resume.name : 'Choose File'}
                  </span>
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full premium-button px-8 py-3 rounded-xl disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
