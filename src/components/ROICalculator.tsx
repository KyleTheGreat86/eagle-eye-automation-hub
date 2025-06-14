
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
  const ourTimePerClaim = 0.1;

  const monthlySavings = (currentCostPerClaim - ourCostPerClaim) * claims[0];
  const yearlySavings = monthlySavings * 12;
  const currentMonthlyHours = (timePerClaim[0] * claims[0]) / 60;
  const ourMonthlyHours = (ourTimePerClaim * claims[0]) / 60;
  const hoursSaved = currentMonthlyHours - ourMonthlyHours;
  const newProfitMargin = monthlySavings;

  return (
    <section id="roi-calculator" className="py-16 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 uppercase-label">
            Interactive ROI Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Calculate Your Savings in Real-Time
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders below to see exactly how much time and money Agency Eagle Eye 
            can save your business every month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Controls */}
          <Card className="superhuman-card p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-white">
                <Calculator className="h-6 w-6 mr-2 text-primary" />
                Your Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-muted-foreground">Monthly Claims Processed</label>
                  <Badge variant="outline" className="text-lg font-bold border-primary/30 text-primary">
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
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>100</span>
                  <span>10,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-muted-foreground">Current Time Per Claim (minutes)</label>
                  <Badge variant="outline" className="text-lg font-bold border-primary/30 text-primary">
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
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 min</span>
                  <span>15 min</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="font-medium text-muted-foreground">Staff Hourly Wage</label>
                  <Badge variant="outline" className="text-lg font-bold border-primary/30 text-primary">
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
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>$15</span>
                  <span>$50</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Current Cost Per Claim</div>
                  <div className="text-xl font-bold text-destructive">${currentCostPerClaim}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Your Cost Per Claim</div>
                  <div className="text-xl font-bold text-success">${ourCostPerClaim}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <div className="space-y-4">
            <Card className="roi-card p-6 bg-gradient-to-r from-success/20 to-success/10 border-success/20">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Monthly Cost Savings</div>
                    <div className="text-3xl font-bold text-white">${monthlySavings.toLocaleString()}</div>
                  </div>
                  <DollarSign className="h-12 w-12 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="roi-card p-6 bg-gradient-to-r from-primary/20 to-primary/10 border-primary/20">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Yearly Savings</div>
                    <div className="text-3xl font-bold text-white">${yearlySavings.toLocaleString()}</div>
                  </div>
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="roi-card p-6 bg-gradient-to-r from-purple-500/20 to-purple-500/10 border-purple-500/20">
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Staff Hours Saved/Month</div>
                    <div className="text-3xl font-bold text-white">{Math.round(hoursSaved)}</div>
                  </div>
                  <Clock className="h-12 w-12 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="superhuman-card p-6 metric-highlight">
              <CardContent className="pt-0">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">New Profit Margin</div>
                  <div className="text-2xl font-bold text-primary">
                    ${newProfitMargin.toLocaleString()}/month
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    <strong>Payback Period:</strong> <span className="text-success font-semibold">Immediate</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            These calculations are based on real client results. Your actual savings may vary.
          </p>
          <Card className="max-w-2xl mx-auto superhuman-card p-6 metric-highlight">
            <CardContent className="pt-0">
              <h3 className="text-lg font-semibold text-white mb-2">
                Ready to see these results in your business?
              </h3>
              <p className="text-muted-foreground">
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
