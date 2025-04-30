
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'criadores', name: 'Criadores' },
    { id: 'empresas', name: 'Empresas' },
    { id: 'portfolios', name: 'Portfólios' }
  ];

  const projects = [
    {
      id: 1,
      title: "LinkHub para Fotógrafo",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=600&auto=format&fit=crop",
      category: "portfolios",
      accent: "from-blue-400 to-purple-600"
    },
    {
      id: 2,
      title: "Hub de Influencer",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
      category: "criadores",
      accent: "from-pink-400 to-orange-600"
    },
    {
      id: 3,
      title: "LinkHub para E-commerce",
      image: "https://images.unsplash.com/photo-1559667326-de20531c25d6?q=80&w=600&auto=format&fit=crop",
      category: "empresas",
      accent: "from-teal-400 to-blue-600"
    },
    {
      id: 4,
      title: "LinkHub para Podcaster",
      image: "https://images.unsplash.com/photo-1604149370100-2d3d5690a1b5?q=80&w=600&auto=format&fit=crop",
      category: "criadores",
      accent: "from-purple-400 to-indigo-600"
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Nossos trabalhos</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Veja exemplos de LinkHubs que desenvolvemos para criadores e empresas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`mb-2 ${
                activeCategory === category.id 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                  : "border-white/20 hover:bg-white/10"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="group overflow-hidden glass-card border-0 transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">{project.title}</h3>
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.accent} mt-2`}></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
            Ver todos os projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
