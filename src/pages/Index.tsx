import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-mint">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <p className="text-accent text-lg mb-4">
              In this season, find the best 🔥
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-primary">
              Exclusive collection for everyone
            </h1>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
              Explore now
              <span className="inline-block">→</span>
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#ffd700] rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-[#ff69b4] rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Hero"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 px-4">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <ProductCard
              name="MacBook Pro"
              price="$1,299"
              image="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              rating={5}
              reviews={12}
            />
            <ProductCard
              name="iPhone 13"
              price="$799"
              image="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
              rating={4}
              reviews={8}
            />
            <ProductCard
              name="iPad Pro"
              price="$999"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              rating={5}
              reviews={15}
            />
            <ProductCard
              name="AirPods Pro"
              price="$249"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              rating={4}
              reviews={10}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;