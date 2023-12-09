import React from "react";

const staticTeamMembers = [
  {
    id: 1,
    name: "Johnson",
    position: "CEO",
    imageUrl: "/johnson.jpg",
  },
  {
    id: 2,
    name: "Jadon Smith",
    position: "CTO",
    imageUrl: "/jadon.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Lead Developer",
    imageUrl: "/bob.jpg",
  },
  {
    id: 4,
    name: "Alice Williams",
    position: "Designer",
    imageUrl: "/alice.jpg",
  },
];

const TeamsSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staticTeamMembers.map((member) => (
            <div key={member.id} className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 group">
              <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-full transition-transform transform scale-100 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-80 opacity-0 flex flex-col items-center justify-center transition-opacity group-hover:opacity-100">
                <p className="text-white font-bold text-lg mb-2">{member.name}</p>
                <p className="text-gray-300 text-sm">{member.position}</p>
                <p className="text-gray-300 text-xs">{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
