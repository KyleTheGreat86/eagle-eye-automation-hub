
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
    <section id="roi-calculator" className="py-20 px-4 section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full border border-green-400/30">
            <span className="text-sm font-medium text-green-300">Interactive ROI Calculator</span>
          </div>
          <h2 className="superhuman-headline text-4xl md:text-5xl mb-8">
            Calculate Your 
            <span className="stat-highlight"> Savings </span>
            in Real-Time
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Adjust the sliders below to see exactly how much time and money Agency Eagle Eye 
            can save your business every month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Controls */}
          <div className="superhuman-card p-8 rounded-xl">
            <div className="flex items-center mb-8">
              <Calculator className="h-6 w-6 mr-3 text-blue-400" />
              <h3 className="text-xl font-bold">Your Business Details</h3>
            </div>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-gray-300">Monthly Claims Processed</label>
                  <div className="text-lg font-bold stat-highlight">
                    {claims[0].toLocaleString()}
                  </div>
                </div>
                <Slider
                  value={claims}
                  onValueChange={setClaims}
                  max={10000}
                  min={100}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-gray-300">Current Time Per Claim (minutes)</label>
                  <div className="text-lg font-bold stat-highlight">
                    {timePerClaim[0]} min
                  </div>
                </div>
                <Slider
                  value={timePerClaim}
                  onValueChange={setTimePerClaim}
                  max={15}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 min</span>
                  <span>15 min</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="font-medium text-gray-300">Staff Hourly Wage</label>
                  <div className="text-lg font-bold stat-highlight">
                    ${hourlyWage[0]}
                  </div>
                </div>
                <Slider
                  value={hourlyWage}
                  onValueChange={setHourlyWage}
                  max={50}
                  min={15}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>$15</span>
                  <span>$50</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Current Cost Per Claim</div>
                  <div className="text-xl font-bold text-red-400">${currentCostPerClaim}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-1">Our Cost Per Claim</div>
                  <div className="text-xl font-bold text-green-400">${ourCostPerClaim}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            <div className="superhuman-card p-8 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-300 mb-2">Monthly Cost Savings</div>
                  <div className="text-4xl font-bold stat-highlight">${monthlySavings.toLocaleString()}</div>
                </div>
                <DollarSign className="h-12 w-12 text-green-400" />
              </div>
            </div>

            <div className="superhuman-card p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-blue-300 mb-2">Yearly Savings</div>
                  <div className="text-4xl font-bold text-blue-400">${yearlySavings.toLocaleString()}</div>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-400" />
              </div>
            </div>

            <div className="superhuman-card p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-purple-300 mb-2">Staff Hours Saved/Month</div>
                  <div className="text-4xl font-bold text-purple-400">{Math.round(hoursSaved)}</div>
                </div>
                <Clock className="h-12 w-12 text-purple-400" />
              </div>
            </div>

            <div className="superhuman-card p-8 rounded-xl glow-border">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">New Profit Margin</div>
                <div className="text-3xl font-bold stat-highlight mb-4">
                  ${newProfitMargin.toLocaleString()}/month
                </div>
                <div className="text-sm text-gray-400">
                  <strong>Payback Period:</strong> <span className="text-green-400 font-semibold">Immediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-8">
            These calculations are based on real client results. Your actual savings may vary.
          </p>
          <div className="superhuman-card max-w-2xl mx-auto p-8 rounded-xl glow-border">
            <h3 className="text-lg font-semibold mb-4">
              Ready to see these results in your business?
            </h3>
            <p className="text-gray-300">
              We offer a completely free pilot program where we'll process your first 100 tasks 
              at no charge. You'll experience these exact savings before making any commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
