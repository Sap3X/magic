import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Lena Pearce",
      position: "position",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "bg-blue-500",
      bgPosition: "left"
    },
    {
      id: 2,
      name: "Sophia Bach",
      position: "position",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "bg-green-500",
      bgPosition: "center",
      featured: true
    },
    {
      id: 3,
      name: "Arielle Copper",
      position: "position",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      bgColor: "bg-teal-500",
      bgPosition: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            OUR TEAM
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative group">
              {/* Background Decorative Element */}
              <div className={`absolute inset-0 ${member.bgColor} rounded-3xl transform rotate-3 scale-95 opacity-20 group-hover:rotate-6 group-hover:scale-100 transition-all duration-300`}></div>
              <div className={`absolute inset-0 ${member.bgColor} rounded-3xl transform -rotate-2 scale-90 opacity-10 group-hover:-rotate-4 group-hover:scale-95 transition-all duration-300`}></div>
              
              {/* Main Card */}
              <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${member.featured ? 'lg:scale-105' : ''}`}>
                
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className={`absolute -top-2 -right-2 w-6 h-6 ${member.bgColor} rounded-full`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 italic mb-4 text-sm">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;