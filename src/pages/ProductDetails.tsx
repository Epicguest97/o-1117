
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const { id } = useParams();
  // In a real app, you would fetch the equipment details using the id
  const equipment = {
    name: "Universal Testing Machine",
    lab: "Structural Lab",
    rating: 4,
    reviews: 12,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    ],
    description: "The Universal Testing Machine (UTM) is designed to test the tension, compression, bending, and shear properties of materials. It's commonly used for testing metals, polymers, and various building materials to determine their mechanical properties.",
    specifications: "Capacity: 100 kN, Accuracy: ±1%, Power: 3 phase AC, Sample Size: Up to 500mm",
    usage: "Primarily used for tensile testing of steel bars, compression testing of concrete cylinders, and flexural testing of beams."
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Equipment Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={equipment.images[0]}
                alt={equipment.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {equipment.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={`${equipment.name} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{equipment.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-primary">{equipment.lab}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < equipment.rating ? "fill-[#ffd700] text-[#ffd700]" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-accent ml-2">
                  ({equipment.reviews} research papers)
                </span>
              </div>
            </div>

            <Button className="w-full lg:w-auto">Request Access</Button>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  {equipment.description}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="specifications">
                <AccordionTrigger>Specifications</AccordionTrigger>
                <AccordionContent>
                  {equipment.specifications}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="usage">
                <AccordionTrigger>Usage Guidelines</AccordionTrigger>
                <AccordionContent>
                  {equipment.usage}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Equipment Info */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Safety Instructions</h3>
                <p className="text-sm text-accent">Must wear proper PPE while operating</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Maintenance Schedule</h3>
                <p className="text-sm text-accent">Monthly calibration required</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Booking Duration</h3>
                <p className="text-sm text-accent">Maximum 4 hours per session</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Technical Support</h3>
                <p className="text-sm text-accent">Lab technician available on request</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
