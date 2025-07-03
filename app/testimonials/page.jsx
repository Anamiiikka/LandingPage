import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import testimonialsData from "@/data/testimonials.json";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  console.log("Generating static params:", testimonialsData.map((t) => ({ id: t.id.toString() })));
  return testimonialsData.map((testimonial) => ({
    id: testimonial.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const testimonial = testimonialsData.find((t) => t.id === parseInt(params.id));
  if (!testimonial) {
    return {
      title: "Testimonial Not Found",
    };
  }
  return {
    title: `${testimonial.title} | Your Site Name`,
    description: testimonial.summary,
    openGraph: {
      images: [testimonial.image],
    },
  };
}

export default function TestimonialPage({ params }) {
  console.log("Params received:", params);
  const testimonial = testimonialsData.find((t) => t.id === parseInt(params.id));
  console.log("Found testimonial:", testimonial);

  if (!testimonial) {
    console.error("Testimonial not found for ID:", params.id);
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="premium-card">
            <div
              className="aspect-[4/3] bg-gradient-to-br from-white/15 to-white/5"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${testimonial.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold gradient-text mb-4">{testimonial.title}</h1>
              <p className="text-white/60 mb-4">{testimonial.summary}</p>
              <p className="text-white/80 mb-6 leading-relaxed">{testimonial.testimonial}</p>
              <div className="mb-6">
                <div className="font-medium text-white">{testimonial.client}</div>
                <div className="text-white/50 text-sm">{testimonial.company} - {testimonial.role}</div>
                <div className="text-white/50 text-sm">Category: {testimonial.category}</div>
                <div className="text-white/50 text-sm">Results: {testimonial.results}</div>
                <div className="text-white/50 text-sm">Timeline: {testimonial.timeline}</div>
                <div className="text-white/50 text-sm">Services: {testimonial.services.join(", ")}</div>
              </div>
              <Link href="/testimonials">
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  Back to Testimonials
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}