import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/ui/reveal"
import AnimatedBackground from "@/components/animated-background"
import { DollarSign, TrendingUp, Users, BarChart, Percent, Award } from "lucide-react"

export default function Affiliates() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
        <AnimatedBackground />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <Reveal className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                  Affiliate Program
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl gradient-text">
                  Earn Money Promoting Our Proxies
                </h1>
                <p className="text-xl text-muted-foreground">
                  Join our affiliate program and earn up to 20% commission on every sale you refer.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-pulse"
                >
                  <Link href="#join-now">Join Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                >
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal direction="left" delay={300} className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-center">
                    <div className="rounded-full bg-primary/10 p-3 transition-transform duration-500 hover:scale-110">
                      <DollarSign className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">20%</h3>
                        <p className="text-sm text-muted-foreground">commission rate</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">30 Days</h3>
                        <p className="text-sm text-muted-foreground">cookie duration</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">Monthly</h3>
                        <p className="text-sm text-muted-foreground">payments</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">$50</h3>
                        <p className="text-sm text-muted-foreground">minimum payout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      </section>

      {/* How It Works Section */}
      <section id="learn-more" className="py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[85%] text-muted-foreground">
              Join our affiliate program in three simple steps and start earning commissions.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Complete our simple registration form to join the affiliate program.",
              },
              {
                step: "2",
                title: "Promote",
                description: "Share your unique affiliate link on your website, blog, or social media.",
              },
              {
                step: "3",
                title: "Earn",
                description: "Earn up to 20% commission on every sale generated through your link.",
              },
            ].map((step, index) => (
              <Reveal key={index} delay={index * 200} direction="up">
                <Card className="border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
                  <CardHeader className="pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                      {step.step}
                    </div>
                    <CardTitle className="mt-4">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Affiliate Benefits</h2>
            <p className="max-w-[85%] text-muted-foreground">
              Enjoy these exclusive benefits when you join our affiliate program.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Percent,
                title: "High Commission Rates",
                description: "Earn up to 20% commission on every sale you refer to us.",
              },
              {
                icon: TrendingUp,
                title: "Recurring Commissions",
                description: "Earn commissions on initial sales and renewals for the lifetime of the customer.",
              },
              {
                icon: Users,
                title: "30-Day Cookie",
                description: "Our 30-day cookie duration gives you more chances to earn commissions.",
              },
              {
                icon: BarChart,
                title: "Real-Time Tracking",
                description: "Monitor your performance with our advanced real-time tracking dashboard.",
              },
              {
                icon: DollarSign,
                title: "Timely Payments",
                description: "Receive your earnings monthly via PayPal, bank transfer, or cryptocurrency.",
              },
              {
                icon: Award,
                title: "Dedicated Support",
                description: "Get personalized support from our dedicated affiliate management team.",
              },
            ].map((benefit, index) => (
              <Reveal key={index} delay={index * 100} direction={index % 2 === 0 ? "up" : "down"}>
                <Card className="border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 group">
                  <CardHeader className="pb-2">
                    <benefit.icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <CardTitle className="mt-4">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Commission Structure</h2>
            <p className="max-w-[85%] text-muted-foreground">
              Our tiered commission structure rewards you as you generate more sales.
            </p>
          </Reveal>
          <div className="mx-auto max-w-4xl py-12">
            <Reveal>
              <Card className="border-border/40 bg-background/60 backdrop-blur overflow-hidden">
                <CardHeader>
                  <CardTitle>Monthly Sales Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border/40">
                          <th className="px-4 py-3 text-left font-medium">Sales Volume</th>
                          <th className="px-4 py-3 text-left font-medium">Commission Rate</th>
                          <th className="px-4 py-3 text-left font-medium">Example Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { volume: "$0 - $1,000", rate: "10%", earnings: "$100 on $1,000 sales" },
                          { volume: "$1,001 - $5,000", rate: "15%", earnings: "$750 on $5,000 sales" },
                          { volume: "$5,001+", rate: "20%", earnings: "$2,000 on $10,000 sales" },
                        ].map((tier, index) => (
                          <tr
                            key={index}
                            className={`border-b border-border/40 transition-colors duration-200 hover:bg-muted/30 ${index === 2 ? "bg-primary/5" : ""}`}
                          >
                            <td className="px-4 py-3">{tier.volume}</td>
                            <td className="px-4 py-3 text-primary font-medium">{tier.rate}</td>
                            <td className="px-4 py-3">{tier.earnings}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Promotional Materials Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">Promotional Materials</h2>
            <p className="max-w-[85%] text-muted-foreground">
              We provide a variety of marketing materials to help you promote our products effectively.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {[
              {
                title: "Banner Ads",
                description: "High-quality banner ads in various sizes optimized for maximum conversion.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Text Links",
                description: "Pre-written text links that you can easily add to your content.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Product Descriptions",
                description: "Detailed product descriptions highlighting the key features and benefits.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Email Templates",
                description: "Ready-to-use email templates for promoting our proxy services to your audience.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((material, index) => (
              <Reveal key={index} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={material.image || "/placeholder.svg"}
                      alt={material.title}
                      width={400}
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{material.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{material.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Affiliate Success Stories</h2>
            <p className="max-w-[85%] text-muted-foreground">
              Hear from our successful affiliates who are earning consistent commissions.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "I've been promoting SquidProxies for over a year now and the commissions have been consistently great. Their products are easy to promote because they actually deliver on their promises.",
                name: "Michael T.",
                title: "Tech Blogger",
              },
              {
                quote:
                  "The recurring commission model is what sets this affiliate program apart. I'm still earning from customers I referred over 6 months ago. The passive income is fantastic!",
                name: "Sarah K.",
                title: "Digital Marketer",
              },
              {
                quote:
                  "As someone who runs a proxy review site, I've worked with many providers. SquidProxies has the best combination of product quality and affiliate support, making them my top recommendation.",
                name: "David L.",
                title: "Review Site Owner",
              },
            ].map((testimonial, index) => (
              <Reveal key={index} delay={index * 200} direction="up">
                <Card className="border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl text-primary">"</div>
                    <p className="mb-6 text-muted-foreground italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[85%] text-muted-foreground">
              Find answers to common questions about our affiliate program.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 py-12">
            {[
              {
                question: "How do I join the affiliate program?",
                answer:
                  "Joining is simple! Click the 'Join Now' button, fill out the application form, and our team will review your application. Once approved, you'll receive your unique affiliate link and access to our affiliate dashboard.",
              },
              {
                question: "When and how do I get paid?",
                answer:
                  "We process payments on a monthly basis for all commissions earned in the previous month. The minimum payout threshold is $50. We offer payment via PayPal, bank transfer, or cryptocurrency.",
              },
              {
                question: "Do you offer recurring commissions?",
                answer:
                  "Yes! One of the best features of our affiliate program is that you earn commissions not just on the initial sale, but also on all renewals for the lifetime of the customer.",
              },
              {
                question: "What is the cookie duration?",
                answer:
                  "We offer a 30-day cookie duration. This means that if a visitor clicks on your affiliate link and makes a purchase within 30 days, you'll receive the commission even if they don't buy immediately.",
              },
              {
                question: "Can I promote your products on social media?",
                answer:
                  "You can promote our products on your social media channels, blog, website, or through email marketing. We provide various promotional materials to help you with your marketing efforts.",
              },
            ].map((faq, index) => (
              <Reveal key={index} delay={index * 100}>
                <Card className="border-border/40 bg-background/60 backdrop-blur transition-all duration-300 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-1 group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join-now" className="bg-primary/5 py-20">
        <div className="container px-4 md:px-6">
          <Reveal className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text animate-float">
              Ready to Start Earning?
            </h2>
            <p className="max-w-[85%] text-muted-foreground">
              Join our affiliate program today and start earning commissions by promoting our high-quality proxy
              services.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-pulse"
              >
                <Link href="/affiliate-signup">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-105 hover:bg-primary/10"
              >
                <Link href="/contact">Contact Affiliate Manager</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

