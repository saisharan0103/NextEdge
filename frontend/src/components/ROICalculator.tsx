import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button-enhanced";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";

const ROICalculator = () => {
  const [reps, setReps] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(75);
  const [hoursSaved, setHoursSaved] = useState(10);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    // Calculate monthly savings: reps × hourly × hours × 4.3 weeks
    const savings = reps * hourlyCost * hoursSaved * 4.3;
    setMonthlySavings(savings);
  }, [reps, hourlyCost, hoursSaved]);

  const yearlyROI = monthlySavings * 12;

  return (
    <section className="section-padding" id="roi">
      <div className="container">
        <div className="mx-auto max-w-body text-center space-y-4">
          <h2 className="reveal text-4xl font-semibold tracking-tight md:text-5xl">Prove the ROI in seconds</h2>
          <p className="reveal text-muted">Calculate your potential savings with NextEdge automation</p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <Card className="reveal overflow-hidden">
            <CardHeader className="border-b border-border/60 bg-surface/60">
              <CardTitle className="flex items-center gap-3 text-2xl text-text">
                <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-primary/20 text-primary">
                  <Calculator className="h-6 w-6" />
                </div>
                ROI Calculator
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid gap-10 md:grid-cols-2">
                {/* Input Section */}
                <div className="reveal space-y-6 text-left" style={{ transitionDelay: "80ms" }}>
                  <h3 className="text-lg font-semibold text-text">Your Current Metrics</h3>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="reps" className="text-sm font-medium text-text">
                        Number of Sales Reps
                      </Label>
                      <Input
                        id="reps"
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(Number(e.target.value))}
                        min={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hourly" className="text-sm font-medium text-text">
                        Hourly Cost per Rep ($)
                      </Label>
                      <Input
                        id="hourly"
                        type="number"
                        value={hourlyCost}
                        onChange={(e) => setHourlyCost(Number(e.target.value))}
                        min={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hours" className="text-sm font-medium text-text">
                        Hours Saved per Rep per Week
                      </Label>
                      <Input
                        id="hours"
                        type="number"
                        value={hoursSaved}
                        onChange={(e) => setHoursSaved(Number(e.target.value))}
                        min={1}
                        max={40}
                      />
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div
                  className="reveal flex flex-col justify-between gap-6 rounded-card border border-border/60 bg-surface/50 p-6"
                  style={{ transitionDelay: "160ms" }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <h3 className="text-lg font-semibold text-text">Your Potential Savings</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-card border border-border/60 bg-bg/60 p-5">
                      <div className="text-sm text-muted">Monthly Savings</div>
                      <div className="mt-1 text-3xl font-semibold text-accent">
                        ${monthlySavings.toLocaleString()}
                      </div>
                    </div>

                    <div className="rounded-card border border-border/60 bg-bg/60 p-5">
                      <div className="text-sm text-muted">Annual ROI</div>
                      <div className="mt-1 text-2xl font-semibold text-primary">
                        ${yearlyROI.toLocaleString()}
                      </div>
                    </div>

                    <div className="text-xs text-muted">
                      * Based on {reps} reps saving {hoursSaved} hours/week at ${hourlyCost}/hour
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal mt-10 text-center" style={{ transitionDelay: "200ms" }}>
                <Button variant="primary" size="xl" className="btn-primary px-10">
                  See Your Savings in Action
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;