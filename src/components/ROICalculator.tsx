
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

export const ROICalculator = () => {
  const [claims, setClaims] = useState([3000]);
  const [timePerClaim, setTimePerClaim] = useState([8]);
  const [hourlyWage, setHourlyWage] = useState([25]);

  const currentCostPerClaim = 3.50;
  const ourCostPerClaim = 0.50;
  const ourTimePerClaim = 0.1; // 6 seconds in minutes

  const monthlySavings = (currentCostPerClaim - ourCostPerClaim) * claims[0];
  const yearlySavings = monthlySavings * 12;
  const currentMonthlyHours = (timePerClaim[0] * claims[0]) / 60;
  const ourMonthlyHours = (ourTimePerClaim * claims[0]) / 60;
  const hoursSaved = currentMonthlyHours - ourMonthlyHours;
  const newProfitMargin = monthlySavings;

  return (
    <section id="roi-calculator" className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            Interactive ROI Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculate Your Savings in Real-Time
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Adjust the sliders below to see exactly how much time and money Agency Eagle Eye 
            can save your business every month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Controls */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                Your Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-gray-700">Monthly Claims Processed</label>
                  <Badge variant="outline" className="text-lg font-bold">
                    {claims[0].toLocaleString()}
                  </Badge>
                </div>
                <Slider
                  value={claims}
                  onValueChange={setClaims}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-gray-700">Current Time Per Claim (minutes)</label>
                  <Badge variant="outline" className="text-lg font-bold">
                    {timePerClaim[0]} min
                  </Badge>
                </div>
                <Slider
                  value={timePerClaim}
                  onValueChange={setTimePerClaim}
                  max={15}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1 min</span>
                  <span>15 min</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-gray-700">Staff Hourly Wage</label>
                  <Badge variant="outline" className="text-lg font-bold">
                    ${hourlyWage[0]}
                  </Badge>
                </div>
                <Slider
                  value={hourlyWage}
                  onValueChange={setHourlyWage}
                  max={50}
                  min={15}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$15</span>
                  <span>$50</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Current Cost Per Claim</div>
                  <div className="text-xl font-bold text-red-600">${currentCostPerClaim}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Your Cost Per Claim</div>
                  <div className="text-xl font-bold text-green-600">${ourCostPerClaim}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Monthly Cost Savings</div>
                    <div className="text-3xl font-bold">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <DollarSign className="h-12 w-12 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Yearly Savings</div>
                    <div className="text-3xl font-bold">${yearlySavings.toLocaleString()}</div>
                  </div>
                  <TrendingUp className="h-12 w-12 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Staff Hours Saved/Month</div>
                    <div className="text-3xl font-bold">{Math.round(hoursSaved)}</div>
                  </div>
                  <Clock className="h-12 w-12 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-green-200 bg-green-50">
              <CardContent className="pt-0">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">New Profit Margin</div>
                  <div className="text-2xl font-bold text-green-700">
                    ${newProfitMargin.toLocaleString()}/month
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    <strong>Payback Period:</strong> <span className="text-green-700 font-semibold">Immediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            These calculations are based on real client results. Your actual savings may vary.
          </p>
          <Card className="max-w-2xl mx-auto p-6 bg-blue-50 border-blue-200">
            <CardContent className="pt-0">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Ready to see these results in your business?
              </h3>
              <p className="text-blue-800">
                We offer a completely free pilot program where we'll process your first 100 tasks 
                at no charge. You'll experience these exact savings before making any commitment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
