
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <p className="text-accent text-lg mb-4">
              Explore our comprehensive collection 🔬
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-primary">
              Civil Engineering Laboratory Equipment
            </h1>
            <button 
              onClick={() => navigate('/marketplace')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              View Equipment
              <span className="inline-block">→</span>
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-[#ffd700] rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-[#ff69b4] rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Civil Engineering Lab"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Lab Sections */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 px-4">Our Laboratories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <ProductCard
              name="Structural Lab"
              price="Building Testing Equipment"
              image="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              rating={5}
              reviews={12}
            />
            <ProductCard
              name="Geotechnical Lab"
              price="Soil Testing Equipment"
              image="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
              rating={4}
              reviews={8}
            />
            <ProductCard
              name="Hydraulics Lab"
              price="Fluid Mechanics Equipment"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              rating={5}
              reviews={15}
            />
            <ProductCard
              name="Materials Lab"
              price="Material Testing Equipment"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              rating={4}
              reviews={10}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Request Equipment Information</h2>
            <p className="text-accent">Register to receive updates about new equipment, maintenance schedules, and training sessions.</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">01</span>
                <span>Equipment Manuals</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">02</span>
                <span>Training Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">03</span>
                <span>Research Papers</span>
              </div>
            </div>

            <div className="flex gap-2 max-w-md">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1000&auto=format&fit=crop"
              alt="Civil Engineering Lab"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Lab Equipment Usage Guide */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-purple-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <ChevronDown className="w-10 h-10 text-purple-600" />
              </div>
              <p className="text-sm text-purple-600">Step 1</p>
              <h3 className="font-semibold text-lg">Book Equipment</h3>
              <p className="text-accent text-sm">Reserve lab equipment through our online booking system</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <Plus className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-sm text-blue-600">Step 2</p>
              <h3 className="font-semibold text-lg">Attend Training</h3>
              <p className="text-accent text-sm">Complete required training for specialized equipment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-yellow-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <ChevronUp className="w-10 h-10 text-yellow-600" />
              </div>
              <p className="text-sm text-yellow-600">Step 3</p>
              <h3 className="font-semibold text-lg">Use Equipment</h3>
              <p className="text-accent text-sm">Follow proper procedures when using lab equipment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-pink-50 w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <Check className="w-10 h-10 text-pink-600" />
              </div>
              <p className="text-sm text-pink-600">Step 4</p>
              <h3 className="font-semibold text-lg">Report Results</h3>
              <p className="text-accent text-sm">Document your findings and reset equipment for others</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
