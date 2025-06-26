
import { Check, X } from "lucide-react";

const WhyDailyGrind = () => {
  const comparisons = [
    {
      feature: "Goal Tracking",
      traditional: "Basic task lists",
      dailyGrind: "Smart goal decomposition with milestones"
    },
    {
      feature: "Progress Visualization",
      traditional: "Simple checkboxes",
      dailyGrind: "Beautiful progress charts and streak counters"
    },
    {
      feature: "Habit Formation",
      traditional: "No habit tracking",
      dailyGrind: "Built-in habit builder with science-backed methods"
    },
    {
      feature: "Motivation",
      traditional: "Static to-do items",
      dailyGrind: "Gamified experience with rewards and celebrations"
    },
    {
      feature: "Analytics",
      traditional: "No insights",
      dailyGrind: "Detailed productivity analytics and trends"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              Why Daily Grind?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional to-do apps just list tasks. Daily Grind transforms your entire approach to productivity and goal achievement.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Headers */}
              <div className="p-6 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200">
                <h3 className="text-lg font-semibold text-brand-dark text-center">Features</h3>
              </div>
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-red-50">
                <h3 className="text-lg font-semibold text-red-700 text-center flex items-center justify-center gap-2">
                  <X className="h-5 w-5" />
                  Traditional To-Do Apps
                </h3>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary/10 to-purple-100 border-b md:border-b-0 border-gray-200">
                <h3 className="text-lg font-semibold text-primary text-center flex items-center justify-center gap-2">
                  <Check className="h-5 w-5" />
                  Daily Grind
                </h3>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((item, index) => (
                <div key={index} className="contents">
                  <div className="p-6 bg-gray-50 border-b md:border-r border-gray-200 flex items-center">
                    <span className="font-medium text-brand-dark">{item.feature}</span>
                  </div>
                  <div className="p-6 border-b md:border-r border-gray-200 flex items-center">
                    <span className="text-gray-600">{item.traditional}</span>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-primary/5 to-purple-50 border-b border-gray-200 flex items-center">
                    <span className="text-brand-dark font-medium">{item.dailyGrind}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 animate-fade-up">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              <Check className="h-5 w-5" />
              Ready to upgrade your productivity?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDailyGrind;
