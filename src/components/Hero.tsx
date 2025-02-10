import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-16 container">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Transform Your Business with Our{" "}
          <span className="text-primary">Powerful SaaS</span> Solution
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem]">
          Streamline your workflow, boost productivity, and scale your business
          with our all-in-one platform. Join thousands of satisfied customers
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="w-full sm:w-auto">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Book a Demo
          </Button>
        </div>
        <div className="pt-8 flex flex-col items-center space-y-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background bg-muted"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="font-semibold">5,000+</span> companies
            worldwide
          </p>
        </div>
      </div>
    </section>
  );
}