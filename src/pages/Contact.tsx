
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Clock, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Free Consultation Available
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The first step toward automating your business processes is a simple conversation. 
              We'll discuss your current challenges, understand your existing systems, and design 
              an automation solution that delivers immediate value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
                <p className="text-gray-600">
                  Our consultation is completely free, with no obligation or pressure.
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="mt-1">
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your current challenges and what you'd like to automate..."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message & Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Process */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center">
                    <Mail className="h-6 w-6 mr-2 text-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-blue-600">kyle@agencyeagleeye.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Website</div>
                    <div className="text-blue-600">www.agencyeagleeye.com</div>
                  </div>
                  <div className="flex items-center pt-2">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">Monday-Friday, 9:00 AM - 6:00 PM EST</span>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Process */}
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle>Free Consultation Process</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6">
                    During our initial consultation, we'll review your current manual processes and 
                    identify the highest-impact automation opportunities. We'll explain exactly how 
                    our automation would work with your existing systems and provide detailed projections 
                    of the time and cost savings you can expect.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">Free 30-minute consultation call</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">Custom automation strategy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">ROI projections and timeline</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">Free pilot program offer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    How quickly can you implement automation?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    Most automation solutions can be implemented within 1-2 weeks of our initial consultation. 
                    Simple automations like job board scraping can often be operational within 3-5 business days.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Will I need to change my existing software?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    No. Our automation works with your existing systems and processes. We don't require 
                    any software changes, integrations, or staff retraining.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    What if your automation stops working?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    We provide continuous monitoring and maintenance for all our automation solutions. 
                    If any issues arise, we address them immediately and provide regular updates on resolution progress.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    How do you ensure data security?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    We implement enterprise-grade security measures and maintain strict confidentiality protocols. 
                    All client data is encrypted and stored securely, and we never share information with third parties.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Can you customize automation for specific needs?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    Absolutely. While we offer standardized solutions for common processes, we can customize 
                    automation to meet your specific requirements and integrate with your unique systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
                    What's included in the free pilot program?
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600">
                    Our free pilot programs include processing your first 100 tasks at no charge, complete setup, 
                    performance monitoring, and detailed reporting so you can measure the exact benefits before committing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact us today to schedule your free consultation and automation assessment. 
                  We'll analyze your current processes and provide a detailed projection of the 
                  benefits you can expect from automation.
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Schedule Free Consultation Now
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

export default Contact;
