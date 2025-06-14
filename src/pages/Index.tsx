
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, CheckCircle, Users, TrendingUp, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { ROICalculator } from "@/components/ROICalculator";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              Pay Only for Results, Not Hours
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Wasting Hours on Manual Data Entry
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              We Automate Your Repetitive Tasks While You Focus on Growing Your Business
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Agency Eagle Eye transforms your time-consuming manual processes into automated workflows. 
              Pay only for results, not hours. No new software required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                See How Much Time and Money You Could Save
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Hidden Cost of Manual Processes
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Research shows that businesses lose an average of <strong>21% of their productive capacity</strong> to manual, 
                repetitive tasks that could be automated. For a medical billing company processing 5,000 claims monthly, 
                this translates to over 600 hours of staff time—equivalent to hiring an additional full-time employee 
                just to handle data entry.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Time Drain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">600+ hours monthly on repetitive tasks for a typical 5,000 claim operation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Human Error</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manual processes introduce costly errors leading to claim denials and missed opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl">Lost Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Every manual hour is time stolen from revenue-generating activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Automation That Works With Your Existing Systems
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                Agency Eagle Eye eliminates these inefficiencies through intelligent automation that requires 
                <strong> no changes to your current software or workflows</strong>. Our approach is fundamentally 
                different from traditional automation solutions that demand expensive integrations or system replacements.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Browser Automation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use advanced browser automation technology to interact with your existing software exactly 
                as a human would, but with perfect accuracy and unlimited endurance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Works with any existing software</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>No integrations required</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Perfect accuracy, unlimited endurance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Immediate implementation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Key Differentiators</h4>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-sm">Enterprise-grade security</span>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-sm">Results-based pricing</span>
                </div>
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-sm">24/7 monitoring & support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Measurable Results From Day One
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our clients typically see immediate and substantial returns on their automation investment. 
            Medical billing companies report processing speed increases of 300-500%, with accuracy 
            improvements that reduce denial rates by up to 40%.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300-500%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Processing Speed Increase</div>
              <p className="text-gray-600">Dramatically faster task completion</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Reduction in Denial Rates</div>
              <p className="text-gray-600">Improved accuracy prevents costly errors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">Day 1</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Time to Value</div>
              <p className="text-gray-600">Immediate results from implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Trusted by Industry Leaders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Medical Billing Company</div>
                    <div className="text-sm text-gray-500">Healthcare Services</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "Since implementing Agency Eagle Eye's automation, we've reduced our claims processing 
                  time from 6 hours daily to just 45 minutes of review time. The accuracy is incredible, 
                  and our staff can now focus on denial management and growing our client base."
                </blockquote>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold">Roofing Contractor</div>
                    <div className="text-sm text-gray-500">Construction & Trades</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "The lead generation automation has transformed our business. We're getting 3x more 
                  qualified leads than before, and we're always the first to respond because the system 
                  alerts us immediately."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See How Much Time and Money You Could Save
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Ready to eliminate manual data entry from your business? We offer a completely risk-free 
            pilot program where we'll process your first 100 tasks at no charge. You'll see exactly 
            how our automation works with your existing systems and measure the time and cost savings 
            before making any commitment.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
