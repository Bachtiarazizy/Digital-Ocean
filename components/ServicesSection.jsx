const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Create powerful and responsive websites tailored to your business needs.",
      image: "/WD.jpg",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with strategic digital marketing campaigns.",
      image: "/DM.jpg",
    },
    {
      title: "Mobile App Development",
      description: "Build innovative and user-friendly mobile applications for various platforms.",
      image: "/MAD.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <img src={service.image} alt={service.title} className="mb-4 rounded-md w-full h-auto" style={{ maxHeight: "200px" }} />

              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Hire Us</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
