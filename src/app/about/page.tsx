export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero.webp')",
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Easy Life</h1>
          <p className="mt-3 text-xl text-gray-200">Stylish & Comfortable Men’s Wear in Egypt</p>
        </div>
      </section>

      {/* About Us Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-black">About Us</h2>
        <p className="text-lg leading-7 mb-6">
          <strong>Our Easy Life</strong> is your go-to destination for modern, high-quality men’s clothing and sportswear in Egypt. Our brand was born from the idea that fashion for men should be easy, reliable, and stylish—without breaking the bank.
        </p>

        <h3 className="text-2xl font-semibold mb-2 mt-6">What We Offer</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>High-performance sports items made for active lifestyles</li>
          <li>Everyday T-shirts designed with comfort and durability</li>
          <li>Slim-fit and classic denim jeans pants for all occasions</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2 mt-6">Our Mission</h3>
        <p className="mb-6">
          We aim to make life easier for Egyptian men by delivering versatile clothing that fits every lifestyle—from workouts to hangouts. Our products combine quality fabrics, trendy designs, and fair pricing, all made with the Egyptian customer in mind.
        </p>

        <h3 className="text-2xl font-semibold mb-2 mt-6">Why Choose Us?</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Locally focused for Egyptian needs and preferences</li>
          <li>Fast nationwide delivery</li>
          <li>Friendly customer service that understands your style</li>
        </ul>

        <p className="text-lg font-medium">
          Join thousands of happy customers across Egypt — and step into a lifestyle of comfort, quality, and effortless style with <strong>Our Easy Life</strong>.
        </p>
      </div>
    </div>
  );
}
