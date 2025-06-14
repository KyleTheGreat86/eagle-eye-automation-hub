
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Search, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Industry-Specific Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automation Services Designed for Your Industry
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Agency Eagle Eye specializes in three core automation services that address the most 
              time-consuming manual processes in healthcare billing, trades, and recruitment. Each service 
              is designed to work seamlessly with your existing software and workflows, requiring no changes 
              to your current systems or processes.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-16">
            {/* Service 1: CMS-1500 Claims Processing */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <FileText className="h-12 w-12 text-blue-600 mr-4" />
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-800">Healthcare Billing</Badge>
                      <h2 className="text-2xl font-bold text-gray-900">
                        CMS-1500 Claims Processing Automation
                      </h2>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Transform Hours of Data Entry Into Minutes of Review
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Medical billing is the backbone of healthcare revenue, but manual CMS-1500 processing 
                    consumes enormous amounts of time and introduces costly errors. Our automation solution 
                    extracts data from CMS-1500 PDF forms and accurately inputs it into your existing medical 
                    billing software, whether you use Medisoft, AdvancedMD, Practice Management, or any other platform.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Works with all major billing software</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>99.9% accuracy rate</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Process 100+ claims per hour</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Real-time status updates</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Transparent Pricing</h4>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600">$0.50</div>
                      <div className="text-gray-600">per claim processed</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <div>• Minimum monthly fee: $1,500</div>
                      <div>• Covers up to 3,000 claims</div>
                      <div>• Free pilot: First 100 claims</div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Free Pilot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Service 2: Trade Lead Generation */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 lg:p-12 flex flex-col justify-center lg:order-1">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Subscription</h4>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">$500</div>
                      <div className="text-gray-600">per month</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <div>• Unlimited lead generation</div>
                      <div>• Up to 5 lead sources</div>
                      <div>• Real-time notifications</div>
                      <div>• Google Sheets integration</div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <Search className="h-12 w-12 text-green-600 mr-4" />
                    <div>
                      <Badge className="mb-2 bg-green-100 text-green-800">Construction & Trades</Badge>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Trade Lead Generation Automation
                      </h2>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Never Miss Another Opportunity
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Finding qualified leads is the lifeblood of any trade business, but manually searching 
                    through lead generation websites is time-consuming and often results in missed opportunities. 
                    Our automation solution continuously monitors specified platforms and websites, extracting 
                    new leads that match your criteria and organizing them into easily accessible Google Sheets.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>24/7 automated monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Instant notifications for new leads</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Organized in Google Sheets</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Custom filtering criteria</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Service 3: Job Board Scraping */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <Users className="h-12 w-12 text-purple-600 mr-4" />
                    <div>
                      <Badge className="mb-2 bg-purple-100 text-purple-800">Recruitment & Staffing</Badge>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Job Board Scraping Automation
                      </h2>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Comprehensive Job Market Coverage
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Recruiters and staffing agencies need comprehensive visibility into job market opportunities, 
                    but manually monitoring multiple job boards is time-consuming and often results in missed 
                    opportunities. Our automation solution monitors dozens of job boards simultaneously, extracting 
                    new postings that match your criteria and organizing them into structured spreadsheets.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Monitor 10+ job boards simultaneously</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Custom search criteria</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Structured data organization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Automated notifications</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Affordable Monthly Rate</h4>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-600">$300</div>
                      <div className="text-gray-600">per month</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4 space-y-1">
                      <div>• Monitor up to 10 job boards</div>
                      <div>• Custom search criteria</div>
                      <div>• Structured spreadsheets</div>
                      <div>• Automated notifications</div>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Start Monitoring
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Automate Your Business?
                </h3>
                <p className="text-gray-700 mb-6">
                  All our services come with free pilot programs, so you can experience the benefits 
                  risk-free before making any commitment.
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Schedule Free Consultation
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

export default Services;
