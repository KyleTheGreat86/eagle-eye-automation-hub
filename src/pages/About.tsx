
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Users, Shield, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              About Agency Eagle Eye
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation Experts Focused on Your Success
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Agency Eagle Eye was founded on a simple principle: businesses shouldn't have to choose 
              between efficiency and affordability. Too many companies struggle with time-consuming manual 
              processes because traditional automation solutions are either too expensive, too complex, 
              or incompatible with their existing systems.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that every business deserves access to the efficiency gains that automation 
                provides. Our mission is to eliminate the manual, repetitive tasks that prevent businesses 
                from reaching their full potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We measure our success by the time we save our clients, the errors we prevent, and the 
                growth we enable. When your team can focus on high-value activities instead of manual 
                data entry, everyone wins.
              </p>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="pt-0">
                <Target className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're committed to transparent, results-based relationships with our clients. You pay 
                  only for the tasks we successfully complete, ensuring that our success is directly tied 
                  to your operational improvements. We provide detailed reporting on every task we perform, 
                  maintaining complete transparency about our activities and their impact on your business.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Choose Agency Eagle Eye
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Immediate Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our automation solutions deliver measurable benefits from day one, with no lengthy 
                    implementation periods or learning curves.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">No Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We offer free pilot programs that allow you to experience the benefits before making 
                    any financial commitment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You pay only for results, with no hidden fees, setup charges, or long-term contracts.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our team provides ongoing monitoring, maintenance, and optimization to ensure your 
                    automation continues delivering maximum value.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Proven Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We use enterprise-grade automation technology that's reliable, secure, and scalable 
                    with your business growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="pb-4">
                  <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Custom Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every automation is tailored to your specific needs and existing systems, ensuring 
                    perfect integration and maximum efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Unique Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Assess</h3>
                  <p className="text-gray-600">
                    We analyze your current manual processes to identify the highest-impact automation opportunities.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Automate</h3>
                  <p className="text-gray-600">
                    We build custom automation that works seamlessly with your existing systems and workflows.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Optimize</h3>
                  <p className="text-gray-600">
                    We continuously monitor and improve your automation to ensure maximum efficiency and value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 mb-16">
            <CardContent className="pt-0">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Results That Speak for Themselves
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We don't just promise results—we deliver them. Here's what our clients typically experience:
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">300-500%</div>
                  <div className="text-gray-700">Faster Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-700">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-gray-700">Error Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">Day 1</div>
                  <div className="text-gray-700">Time to Value</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Join hundreds of businesses that have eliminated manual data entry and focused on growth. 
                  Start with our free consultation and pilot program.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
