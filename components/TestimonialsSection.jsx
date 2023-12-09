const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Digital Ocean's expertise has greatly impacted our online presence. They delivered exceptional results on time and within budget.",
      name: "John Doe",
      position: "CEO, Tech Co.",
      image: "/jhon.jpg",
    },
    {
      quote: "Working with Digital Ocean was a pleasure. Their team's creativity and professionalism exceeded our expectations.",
      name: "Jane Smith",
      position: "Marketing Director, Innovate Corp.",
      image: "/jane.jpg",
    },
    {
      quote: "We are grateful for Digital Ocean's outstanding services. Their commitment to quality is unmatched.",
      name: "Alex Johnson",
      position: "CTO, Digital Innovations",
      image: "/alex.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">What they say About us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
              <div className="mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 mx-auto mb-4 absolute -top-10 left-1/2 transform -translate-x-1/2 transition duration-300 hover:scale-110" />
              </div>
              <p className="text-lg text-gray-800 mb-4">{testimonial.quote}</p>
              <p className="text-gray-600 font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
