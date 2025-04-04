
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Universal Testing Machine",
    price: "Structural Lab",
    rating: 4,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: 2,
    name: "Soil Compaction Tester",
    price: "Geotechnical Lab",
    rating: 5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    name: "Hydraulic Flume",
    price: "Hydraulics Lab",
    rating: 4,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 4,
    name: "Concrete Testing Kit",
    price: "Materials Lab",
    rating: 5,
    reviews: 10,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("newest");
  const [category, setCategory] = useState("all");

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Lab Equipment Catalog</h1>
          <p className="text-accent">
            Browse our comprehensive collection of civil engineering laboratory equipment used for testing, analysis, and research across different labs.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4 items-center">
            <div className="text-sm text-accent">Equipment Items: {products.length}</div>
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Labs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Labs</SelectItem>
                <SelectItem value="structural">Structural Lab</SelectItem>
                <SelectItem value="geotechnical">Geotechnical Lab</SelectItem>
                <SelectItem value="hydraulics">Hydraulics Lab</SelectItem>
                <SelectItem value="materials">Materials Lab</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-accent">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
