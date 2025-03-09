
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Beaker, FlaskConical, Droplet, Microscope } from "lucide-react";

// Mock data for lab equipment
const labEquipment = {
  "structural": [
    {
      id: 101,
      name: "Universal Testing Machine",
      price: "Structural Lab",
      rating: 4.5,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 102,
      name: "Compression Testing Machine",
      price: "Structural Lab",
      rating: 4.2,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: 103,
      name: "Flexural Testing Machine",
      price: "Structural Lab",
      rating: 4.0,
      reviews: 6,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 104,
      name: "Impact Testing Machine",
      price: "Structural Lab",
      rating: 4.3,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ],
  "geotechnical": [
    {
      id: 201,
      name: "Direct Shear Apparatus",
      price: "Geotechnical Lab",
      rating: 4.4,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 202,
      name: "Triaxial Testing System",
      price: "Geotechnical Lab",
      rating: 4.7,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 203,
      name: "Soil Compaction Tester",
      price: "Geotechnical Lab",
      rating: 4.1,
      reviews: 7,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: 204,
      name: "Permeability Testing Apparatus",
      price: "Geotechnical Lab",
      rating: 4.3,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    }
  ],
  "hydraulics": [
    {
      id: 301,
      name: "Hydraulic Flume",
      price: "Hydraulics Lab",
      rating: 4.6,
      reviews: 11,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      id: 302,
      name: "Reynolds Apparatus",
      price: "Hydraulics Lab",
      rating: 4.2,
      reviews: 9,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      id: 303,
      name: "Flow Measurement Apparatus",
      price: "Hydraulics Lab",
      rating: 4.4,
      reviews: 13,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 304,
      name: "Venturi & Orifice Meter",
      price: "Hydraulics Lab",
      rating: 4.0,
      reviews: 7,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    }
  ]
};

// Lab information with icons and descriptions
const labInfo = {
  "structural": {
    title: "Structural Lab",
    icon: Beaker,
    description: "The Structural Lab houses equipment for testing and analyzing the mechanical properties and behavior of structural materials and components under various loads."
  },
  "geotechnical": {
    title: "Geotechnical Lab",
    icon: FlaskConical,
    description: "The Geotechnical Lab contains equipment for analyzing soil properties, testing foundation designs, and evaluating earth-related engineering problems."
  },
  "hydraulics": {
    title: "Hydraulics Lab",
    icon: Droplet,
    description: "The Hydraulics Lab features equipment for studying fluid behavior, flow characteristics, and hydraulic systems for water resource engineering applications."
  }
};

const LabPage = () => {
  const { labId } = useParams();
  const labData = labId && labEquipment[labId as keyof typeof labEquipment] || [];
  const info = labId && labInfo[labId as keyof typeof labInfo];

  if (!info) {
    return <div>Lab not found</div>;
  }
  
  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Icon size={28} className="text-primary" />
            <h1 className="text-4xl font-bold">{info.title}</h1>
          </div>
          <p className="text-accent max-w-4xl">
            {info.description}
          </p>
        </div>

        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Available Equipment</h2>
          <p className="text-sm text-accent mb-4">
            The {info.title} houses {labData.length} pieces of specialized equipment for research and testing purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labData.map((equipment) => (
            <ProductCard
              key={equipment.id}
              id={equipment.id}
              name={equipment.name}
              price={equipment.price}
              image={equipment.image}
              rating={equipment.rating}
              reviews={equipment.reviews}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LabPage;
