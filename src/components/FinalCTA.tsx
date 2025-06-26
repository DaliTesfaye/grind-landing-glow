
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const stats = [
    {
      icon: Users,
      number: "10K+",
      label: "Active Users"
    },
    {
      icon: Zap,
      number: "95%",
      label: "Goal Completion Rate"
    },
    {
      icon: Sparkles,
      number: "4.9★",
      label: "App Store Rating"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-purple-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Join the Productivity
              <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop managing tasks. Start achieving goals. Transform your daily grind into daily wins with the productivity app that actually works.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold font-display mb-1">{stat.number}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-brand-dark px-10 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 hover:border-white text-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up">
            <p className="text-purple-200 text-sm mb-4">
              ✨ No credit card required • 🚀 14-day free trial • 💯 Cancel anytime
            </p>
            <div className="flex items-center justify-center gap-4 text-purple-300 text-sm">
              <span>Trusted by ambitious individuals worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;
