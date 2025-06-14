
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle, Users, TrendingUp, Shield, Target, Play, DollarSign, Mail, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to schedule your free consultation.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-6 bg-secondary/50 text-primary border border-primary/20 hover:bg-secondary/70 uppercase-label">
              No Software Changes or New Training Needed
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Medical Billing Companies Save $5,000+ Per Month While Cutting CMS-1500 Time from 8 Minutes to 90 Seconds
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium subhead">
              Stop losing $3.50 per claim on manual data entry. Our AI processes CMS-1500s into your existing PM system for $0.50/claim—with zero setup and same-day onboarding.
            </h2>
            
            {/* Benefit Points */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="flex items-center text-left superhuman-card p-4">
                <CheckCircle className="h-6 w-6 text-success mr-3 flex-shrink-0" />
                <span className="text-lg text-white"><strong className="text-primary">$5,000+ Monthly Savings</strong> – Slash labor costs by 85% immediately</span>
              </div>
              <div className="flex items-center text-left superhuman-card p-4">
                <CheckCircle className="h-6 w-6 text-success mr-3 flex-shrink-0" />
                <span className="text-lg text-white"><strong className="text-primary">90-Second Claims</strong> – Process 100+/hour vs. 4-7 manually</span>
              </div>
              <div className="flex items-center text-left superhuman-card p-4">
                <CheckCircle className="h-6 w-6 text-success mr-3 flex-shrink-0" />
                <span className="text-lg text-white"><strong className="text-primary">Works in Your Current Software</strong> – Medisoft, AdvancedMD, NextGen, etc.</span>
              </div>
              <div className="flex items-center text-left superhuman-card p-4">
                <CheckCircle className="h-6 w-6 text-success mr-3 flex-shrink-0" />
                <span className="text-lg text-white"><strong className="text-primary">Fewer Denials</strong> – 99.9% accuracy eliminates $25 rework costs</span>
              </div>
            </div>

            {/* ROI Teaser */}
            <div className="metric-highlight p-6 rounded-xl mb-8 max-w-3xl mx-auto">
              <p className="text-xl font-semibold text-white">
                "Processing 3,000 claims/month? You're spending $10,500. We'll do it for $1,500."
              </p>
            </div>

            {/* YouTube VSL Section */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border border-white/10"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Agency Eagle Eye - Medical Billing Automation Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Watch how we transform 8-minute manual claims into 90-second automated processing
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="cta-primary hover-lift px-8 py-4 text-lg">
                Start FREE 100-Claim Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="cta-secondary px-8 py-4 text-lg">
                See Exact Savings for My Company
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How Billing Pros Saved $14,000/Month Without Changing Software
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="superhuman-card rounded-xl aspect-video flex items-center justify-center p-8">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">3-min demo showing CMS-1500 PDF → Auto-populated Medisoft fields in 90 sec</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Watch our AI extract patient data, ICD-10s, and CPT codes overnight—no manual entry, no errors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cta-primary hover-lift">
              Book 15-Min Demo
            </Button>
            <Button variant="outline" size="lg" className="cta-secondary">
              See Live Accuracy Test
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Every Manual CMS-1500 Costs You $3.50 in Wasted Biller Time
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="superhuman-card text-center border-destructive/20">
              <CardHeader>
                <Users className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle className="text-xl text-destructive">Biller Burnout</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>8-12 mins/claim at $25/hr = $3.50 wasted per claim</li>
                  <li>Senior staff stuck on data entry instead of AR follow-up</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="superhuman-card text-center border-orange-500/20">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-orange-500">Shrinking Margins</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>Charging clients $4/claim but costing you $3.50 to process</li>
                  <li>20% revenue lost to denials from keying errors</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="superhuman-card text-center border-primary/20">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary">Lost Competitiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
                  <li>Competitors submit claims same-day; yours take 48+ hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered CMS-1500 Processing That Fits Your Existing Workflow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-2 mr-4 mt-1 border border-primary/30">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Email PDFs</h4>
                    <p className="text-muted-foreground">Secure HIPAA-compliant inbox</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-2 mr-4 mt-1 border border-primary/30">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Overnight AI Processing</h4>
                    <p className="text-muted-foreground">90 sec/claim into your PM system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-2 mr-4 mt-1 border border-primary/30">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Review & Submit</h4>
                    <p className="text-muted-foreground">Clean claims ready by 8 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 rounded-full p-2 mr-4 mt-1 border border-primary/30">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">Track Savings</h4>
                    <p className="text-muted-foreground">Daily reports show $5,000+ monthly ROI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="superhuman-card p-8">
              <h4 className="text-xl font-semibold mb-6 text-white">Results You'll See</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="h-6 w-6 text-success mr-3" />
                  <span className="text-sm text-white"><strong>Same-Day Submission</strong> → Faster reimbursements</span>
                </div>
                <div className="flex items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <span className="text-sm text-white"><strong>85% Fewer Labor Hours</strong> → Redeploy staff to high-value work</span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Shield className="h-6 w-6 text-purple-400 mr-3" />
                  <span className="text-sm text-white"><strong>99.9% Accuracy</strong> → Slash denials by 40%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Trusted by Medical Billing Leaders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="superhuman-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="testimonial-quote mr-4">"</div>
                  <div>
                    <div className="font-semibold text-white">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Regional Medical Billing (500+ providers)</div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "We saved $14,200 last month alone. Now our billers focus on denials instead of data entry."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="superhuman-card p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <div className="testimonial-quote mr-4">"</div>
                  <div>
                    <div className="font-semibold text-white">Mike K.</div>
                    <div className="text-sm text-muted-foreground">Healthcare Revenue Solutions</div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "Implemented on Tuesday, saved $5,600 by Friday. Zero training needed."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success/20 text-success border border-success/30 hover:bg-success/30 uppercase-label">
              Free Consultation Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to save $5,000+ monthly? Let's discuss your current processes and design 
              an automation solution that delivers immediate value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="superhuman-card p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-white">Schedule Your Free Consultation</CardTitle>
                <p className="text-muted-foreground">
                  Our consultation is completely free, with no obligation or pressure.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1 bg-background border-white/10 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1 bg-background border-white/10 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1 bg-background border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="industry" className="text-white">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="mt-1 bg-background border-white/10 text-white">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical-billing">Medical Billing</SelectItem>
                        <SelectItem value="trades">Trades</SelectItem>
                        <SelectItem value="recruitment">Recruitment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your current challenges and what you'd like to automate..."
                      className="mt-1 min-h-[120px] bg-background border-white/10 text-white"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full cta-primary hover-lift">
                    Send Message & Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Process */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="superhuman-card p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-white">
                    <Mail className="h-6 w-6 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-primary">kyle@agencyeagleeye.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-white">Website</div>
                    <div className="text-primary">www.agencyeagleeye.com</div>
                  </div>
                  <div className="flex items-center pt-2">
                    <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Monday-Friday, 9:00 AM - 6:00 PM EST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Process */}
              <Card className="superhuman-card p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white">Free Consultation Process</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6">
                    During our initial consultation, we'll review your current manual processes and 
                    identify the highest-impact automation opportunities.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3" />
                      <span className="text-sm text-white">Free 30-minute consultation call</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3" />
                      <span className="text-sm text-white">Custom automation strategy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3" />
                      <span className="text-sm text-white">ROI projections and timeline</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3" />
                      <span className="text-sm text-white">Free pilot program offer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="superhuman-card p-6 metric-highlight">
                <CardContent className="pt-0">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Simple Pricing</div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      $0.50/claim
                    </div>
                    <div className="text-sm text-muted-foreground">
                      vs. $3.50 current cost • <span className="text-success font-semibold">$3,000+ saved monthly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-secondary to-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Keep Your Software. Keep Your Staff. Save $5,000+ Next Month.
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-muted-foreground">
            Process 100 claims FREE. Pay only if you save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="cta-primary hover-lift px-8 py-4 text-lg">
              Start Free Pilot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="cta-secondary px-8 py-4 text-lg">
              Get Custom Savings Estimate
            </Button>
          </div>
          <div className="text-center border-t border-white/10 pt-8">
            <p className="text-sm text-muted-foreground">📞 Mon-Fri 9AM-6PM EST | ✉ kyle@agencyeagleeye.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
