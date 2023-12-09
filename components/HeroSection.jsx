const HeroSection = () => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center relative" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Welcome to Digital Ocean</h1>
        <p className="text-lg lg:text-xl mb-8">We create amazing digital experiences for our clients.</p>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Hire Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
