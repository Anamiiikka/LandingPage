'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ApplicationForm from '@/components/ApplicationForm';
import careersData from '@/data/careersData.json';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-white/[0.02]" />
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              Join Our Team
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Explore exciting career opportunities at AdaLabs and be part of our innovative team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersData.map((job) => (
              <Card key={job.id} className="glass-card hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 mb-4">{job.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="premium-button px-6 py-2 rounded-xl"
                        onClick={() => setSelectedJob(job)}
                      >
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="premium-card">
                      <DialogHeader>
                        <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
                        <DialogDescription>
                          Please fill out the form below to apply for the {selectedJob?.title} position.
                        </DialogDescription>
                      </DialogHeader>
                      <ApplicationForm jobId={selectedJob?.id} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}