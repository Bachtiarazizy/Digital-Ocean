const AboutUsSection = () => {
  const cards = [
    {
      title: "Our Company",
      description: "Founded in 2000, Digital Ocean has been a leading force in the digital industry. With a commitment to excellence, we've successfully delivered innovative solutions to clients worldwide.",
      image: "/company.jpg",
    },
    {
      title: "Our Mission",
      description: "Our mission is to empower businesses through cutting-edge digital solutions. We strive to create value for our clients by leveraging technology to drive growth and success.",
      image: "/team.jpg",
    },
    {
      title: "Core Values",
      description: "At Digital Ocean, we uphold core values that define our culture and guide our decisions. These values include innovation, integrity, collaboration, and being customer-centric.",
      image: "/plan.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <img src={card.image} alt={card.title} className="mb-4 rounded-md w-full h-auto" style={{ maxHeight: "200px" }} />

              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
