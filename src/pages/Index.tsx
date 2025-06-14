
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle, Users, TrendingUp, Shield, Target, Play, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ROICalculator } from "@/components/ROICalculator";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen superhuman-bg noise-texture">
      <Navbar />
      
      {/* Hero Section - Superhuman Style */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full border border-blue-400/30">
            <span className="text-sm font-medium text-blue-300">No Software Changes Required</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="superhuman-headline text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl mx-auto">
            Save $5,000+ Monthly While Cutting 
            <span className="animated-underline"> CMS-1500 Time </span>
            from 8 Minutes to 90 Seconds
          </h1>
          
          {/* Subheadline */}
          <h2 className="superhuman-subheadline text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            AI processes CMS-1500s into your existing PM system for $0.50/claim—with zero setup and same-day onboarding.
          </h2>
          
          {/* Single Power Stat */}
          <div className="mb-12">
            <div className="stat-highlight text-4xl md:text-5xl font-bold mb-2">
              5,000+ claims processed daily
            </div>
            <div className="text-lg text-gray-400">with 99.9% accuracy</div>
          </div>

          {/* ROI Teaser */}
          <div className="superhuman-card p-8 rounded-xl mb-12 max-w-2xl mx-auto glow-border">
            <p className="text-xl font-semibold">
              Processing 3,000 claims/month? You're spending 
              <span className="text-red-400 font-bold"> $10,500</span>. 
              We'll do it for 
              <span className="stat-highlight font-bold"> $1,500</span>.
            </p>
          </div>

          {/* YouTube VSL Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full rounded-xl overflow-hidden glow-border" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Agency Eagle Eye - Medical Billing Automation Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-sm text-gray-400 mt-4 text-center">
              Watch: 8-minute manual claims → 90-second automated processing
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="cta-primary px-12 py-6 text-lg">
              Start FREE 100-Claim Trial
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="cta-secondary px-12 py-6 text-lg">
              See Exact Savings for My Company
            </Button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 section-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="superhuman-headline text-4xl md:text-5xl mb-8">
            How Billing Pros Saved $14,000/Month
          </h2>
          <p className="superhuman-subheadline text-xl mb-12 max-w-2xl mx-auto">
            Watch our AI extract patient data, ICD-10s, and CPT codes overnight—no manual entry, no errors.
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="superhuman-card rounded-xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="h-20 w-20 text-blue-400 mx-auto mb-6" />
                <p className="text-lg text-gray-300">3-min demo: CMS-1500 PDF → Auto-populated Medisoft in 90 sec</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="cta-primary px-10 py-4">
              Book 15-Min Demo
            </Button>
            <Button variant="outline" size="lg" className="cta-secondary px-10 py-4">
              See Live Accuracy Test
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="superhuman-headline text-4xl md:text-5xl mb-6">
              Every Manual CMS-1500 Costs You 
              <span className="stat-highlight"> $3.50 </span>
              in Wasted Time
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="superhuman-card text-center p-8 rounded-xl">
              <Users className="h-16 w-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-red-300 mb-4">Biller Burnout</h3>
              <div className="text-gray-300 space-y-2">
                <p>8-12 mins/claim at $25/hr = $3.50 wasted</p>
                <p>Senior staff stuck on data entry</p>
              </div>
            </div>
            
            <div className="superhuman-card text-center p-8 rounded-xl">
              <TrendingUp className="h-16 w-16 text-orange-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-orange-300 mb-4">Shrinking Margins</h3>
              <div className="text-gray-300 space-y-2">
                <p>Charging $4/claim, costing $3.50</p>
                <p>20% revenue lost to denials</p>
              </div>
            </div>
            
            <div className="superhuman-card text-center p-8 rounded-xl">
              <Target className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-blue-300 mb-4">Lost Competitiveness</h3>
              <div className="text-gray-300 space-y-2">
                <p>Competitors submit same-day</p>
                <p>Yours take 48+ hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="superhuman-headline text-4xl md:text-5xl mb-8">
              AI Processing That Fits Your Workflow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email PDFs</h4>
                  <p className="text-gray-400">Secure HIPAA-compliant inbox</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Overnight Processing</h4>
                  <p className="text-gray-400">90 sec/claim into your PM system</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Review & Submit</h4>
                  <p className="text-gray-400">Clean claims ready by 8 AM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Track Savings</h4>
                  <p className="text-gray-400">Daily reports show $5,000+ monthly ROI</p>
                </div>
              </div>
            </div>
            
            <div className="superhuman-card p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-8">Results You'll See</h4>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                  <span><strong className="text-green-300">Same-Day Submission</strong> → Faster reimbursements</span>
                </div>
                <div className="flex items-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Clock className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0" />
                  <span><strong className="text-blue-300">85% Fewer Hours</strong> → Redeploy to high-value work</span>
                </div>
                <div className="flex items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Shield className="h-6 w-6 text-purple-400 mr-4 flex-shrink-0" />
                  <span><strong className="text-purple-300">99.9% Accuracy</strong> → Slash denials by 40%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* Pricing Section */}
      <section className="py-20 px-4 section-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="superhuman-headline text-4xl md:text-5xl mb-8">
            Save $5,000+ Monthly or Pay Nothing
          </h2>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="superhuman-card p-10 rounded-xl glow-border">
              <h3 className="text-2xl font-bold mb-8">ROI Breakdown (3,000 claims/month)</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-lg text-gray-400 mb-2">Your Current Cost</div>
                  <div className="text-4xl font-bold text-red-400">$10,500</div>
                </div>
                <div>
                  <div className="text-lg text-gray-400 mb-2">Our Cost</div>
                  <div className="text-4xl font-bold text-blue-400">$1,500</div>
                </div>
                <div>
                  <div className="text-lg text-gray-400 mb-2">Your Savings</div>
                  <div className="text-4xl font-bold stat-highlight">$9,000</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-lg">$0.50 per claim (Min. $1,500/month)</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-lg">Zero setup fees</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
              <span className="text-lg">FREE 100-claim pilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="superhuman-headline text-4xl md:text-5xl mb-16 text-center">
            Trusted by Medical Billing Leaders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="testimonial-card p-8 rounded-xl">
              <div className="quote-mark">"</div>
              <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                We saved $14K in month one.
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah M.</div>
                  <div className="text-sm text-gray-400">Regional Medical Billing</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card p-8 rounded-xl">
              <div className="quote-mark">"</div>
              <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                Implemented Tuesday. Saved $5,600 by Friday.
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MK</span>
                </div>
                <div>
                  <div className="font-semibold">Mike K.</div>
                  <div className="text-sm text-gray-400">Healthcare Revenue Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="superhuman-headline text-4xl md:text-5xl mb-8">
            Keep Your Software. Keep Your Staff. 
            <br />
            <span className="stat-highlight">Save $5,000+ Next Month.</span>
          </h2>
          <p className="text-xl mb-12 superhuman-subheadline max-w-2xl mx-auto">
            Process 100 claims FREE. Pay only if you save.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button size="lg" className="cta-primary px-12 py-6 text-lg">
              Start Free Pilot
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="cta-secondary px-12 py-6 text-lg">
              Get Custom Savings Estimate
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400">📞 Mon-Fri 9AM-6PM EST | ✉ kyle@agencyeagleeye.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
