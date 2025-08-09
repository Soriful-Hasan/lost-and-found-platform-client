import React from "react";
import {
  Eye,
  Heart,
  Users,
  Globe,
  Shield,
  Zap,
  Target,
  Compass,
  Lightbulb,
  HandHeart,
  Search,
  MapPin,
} from "lucide-react";

const OurVision = () => {
  const visionPoints = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Community",
      description:
        "Creating a worldwide network where lost items find their way home through the power of human connection.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description:
        "Building a safe, secure platform where every interaction is protected and every user is verified.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Matching",
      description:
        "Leveraging cutting-edge technology to instantly connect lost items with their rightful owners.",
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Compassionate Support",
      description:
        "Providing emotional support and guidance during stressful times when valuable items go missing.",
    },
  ];

  const missionStats = [
    {
      number: "50K+",
      label: "Items Reunited",
      description: "Successfully returned to owners",
    },
    {
      number: "25K+",
      label: "Active Users",
      description: "Helping each other daily",
    },
    {
      number: "150+",
      label: "Cities Covered",
      description: "Across the globe",
    },
    {
      number: "94%",
      label: "Success Rate",
      description: "Items found within 30 days",
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Empathy",
      description: "Understanding the emotional value of lost possessions",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Community",
      description:
        "Fostering connections between strangers who help each other",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation",
      description:
        "Continuously improving through technology and user feedback",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Purpose",
      description:
        "Dedicated to reuniting people with their cherished belongings",
    },
  ];

  return (
    <div className="bg-gray-50 py-30 dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Vision Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 leading-relaxed mb-8">
              To create a world where{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                no precious item stays lost forever
              </span>{" "}
              and every person who finds something has the tools to return it to
              its rightful owner.
            </p>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8  border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Compass className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                We believe that behind every lost item is a story, a memory, or
                a necessity that matters deeply to someone. Our mission is to
                harness the power of community, technology, and human kindness
                to bridge the gap between loss and recovery, creating hope where
                there was despair.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700  hover: transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-700  mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact So Far
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Every number represents real people, real stories, and real
              moments of joy when something precious comes home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 group-hover:bg-gray-100 dark:group-hover:bg-slate-600 transition-colors duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we
              build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 "
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
