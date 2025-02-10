import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "This SaaS platform has completely transformed how we manage our business. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
  },
  {
    quote:
      "The best investment we've made for our company. The ROI was visible within the first month of implementation.",
    author: "Michael Chen",
    title: "Operations Director, Growth Co",
  },
  {
    quote:
      "Outstanding support team and feature-rich platform. It's exactly what we needed to scale our operations.",
    author: "Emma Rodriguez",
    title: "Founder, Digital Solutions",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Loved by Businesses Worldwide
        </h2>
        <p className="text-lg text-muted-foreground max-w-[42rem] mx-auto">
          Don't just take our word for it. Here's what our customers have to say
          about their experience.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="h-6 w-6">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-full w-full text-primary"
                  >
                    <path
                      d="M9.5 6.5c-.5-1.8-2-3.3-4-3.5-.5 0-1 0-1.5.3C2.5 4 2 5.3 2 6.5c0 .8.2 1.5.6 2.2.9 1.4 2.6 2.3 4.4 2.3M19.5 6.5c-.5-1.8-2-3.3-4-3.5-.5 0-1 0-1.5.3-1.5.7-2 2-2 3.2 0 .8.2 1.5.6 2.2.9 1.4 2.6 2.3 4.4 2.3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-lg">{testimonial.quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}