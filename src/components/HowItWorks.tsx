
import { Target, TrendingUp, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Set Smart Goals",
      description: "Break down your big goals into actionable daily tasks with our intelligent goal decomposition system.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Watch your progress unfold with beautiful visualizations, streak counters, and milestone celebrations.",
      color: "accent"
    },
    {
      icon: Zap,
      title: "Build Momentum",
      description: "Turn consistent actions into lasting habits with our science-backed habit formation techniques.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          icon: 'text-primary',
          accent: 'bg-primary'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          icon: 'text-accent',
          accent: 'bg-accent'
        };
      case 'green':
        return {
          bg: 'bg-green-100',
          icon: 'text-green-600',
          accent: 'bg-green-500'
        };
      default:
        return {
          bg: 'bg-gray-100',
          icon: 'text-gray-600',
          accent: 'bg-gray-500'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-gray to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your productivity in three simple steps. From goal setting to habit formation, Daily Grind guides you every step of the way.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-slide-up group hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 ${colors.accent} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`h-8 w-8 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visual Flow */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg animate-bounce-gentle"></div>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Your Goals</h4>
                <p className="text-sm text-gray-600">Big dreams & aspirations</p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent hidden md:block"></div>
                <div className="w-4 h-4 bg-primary rounded-full mx-2 animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent hidden md:block"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg animate-bounce-gentle" style={{ animationDelay: '0.3s' }}></div>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Daily Actions</h4>
                <p className="text-sm text-gray-600">Broken down into tasks</p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-green-500 hidden md:block"></div>
                <div className="w-4 h-4 bg-accent rounded-full mx-2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-green-500 hidden md:block"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-green-200 rounded-lg animate-bounce-gentle" style={{ animationDelay: '0.6s' }}></div>
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">Success Habits</h4>
                <p className="text-sm text-gray-600">Lasting behavioral change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
