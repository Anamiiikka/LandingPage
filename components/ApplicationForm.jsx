'use client';

import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText } from 'lucide-react';

export default function ApplicationForm({ jobId }) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    control,
    trigger,
  } = useForm({
    defaultValues: {
      name: '',
      age: '',
      experience: '',
      resume: null,
    },
    mode: 'onChange', 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resume = watch('resume');
  useEffect(() => {
    console.log('Resume field state:', resume);
    console.log('Form errors:', errors);
  }, [resume, errors]);

  const handleFileChange = async (e, onChange) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      toast({
        title: 'File Too Large',
        description: 'Resume must be under 5MB.',
        variant: 'destructive',
      });
      e.target.value = '';
      onChange(null);
      await trigger('resume');
      return;
    }
    if (
      file &&
      (file.type === 'application/pdf' ||
        file.type === 'application/msword' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    ) {
      onChange(file);
      await trigger('resume');
    } else {
      toast({
        title: 'Invalid File Type',
        description: 'Please upload a PDF or DOC file.',
        variant: 'destructive',
      });
      e.target.value = '';
      onChange(null);
      await trigger('resume');
    }
  };

  const onSubmit = async (data) => {
    console.log('Form data on submit:', data);
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', data.name);
      formDataToSend.append('age', data.age);
      formDataToSend.append('experience', data.experience);
      formDataToSend.append('resume', data.resume);
      formDataToSend.append('jobId', jobId);

      const response = await fetch('/api/join-team', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit application');
      }

      toast({
        title: 'Submitted',
        description: 'Thank you for your interest in Adalabs! We will review your application and get back to you soon.',
      });

      reset();
      const fileInput = document.getElementById('resume');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: error.message || 'An error occurred while submitting your application.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white/80">
          Full Name
        </Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="age" className="text-white/80">
          Age
        </Label>
        <Input
          id="age"
          type="number"
          {...register('age', {
            required: 'Age is required',
            min: { value: 18, message: 'Age must be at least 18' },
          })}
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
          placeholder="Enter your age"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
      </div>
      <div>
        <Label htmlFor="experience" className="text-white/80">
          Years of Experience
        </Label>
        <Input
          id="experience"
          type="number"
          {...register('experience', {
            required: 'Experience is required',
            min: { value: 0, message: 'Experience cannot be negative' },
          })}
          className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-white/30"
          placeholder="Enter years of experience"
        />
        {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
      </div>
      <div>
        <Label htmlFor="resume" className="text-white/80">
          Resume/CV (PDF or DOC)
        </Label>
        <div className="mt-2">
          <Controller
            name="resume"
            control={control}
            rules={{ required: 'Resume is required' }}
            render={({ field: { onChange } }) => (
              <label
                htmlFor="resume"
                className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer rounded-md bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
              >
                <FileText className="w-5 h-5 text-white/60" />
                <span className="text-white/80">
                  {resume && resume instanceof File ? resume.name : 'Choose File'}
                </span>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, onChange)}
                  className="hidden"
                />
              </label>
            )}
          />
          {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>}
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
  );
}