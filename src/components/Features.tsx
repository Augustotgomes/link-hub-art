
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Features: React.FC = () => {
  const features = [
    {
      title: "Design personalizado",
      description: "Criamos designs únicos adaptados à sua marca, sem usar templates genéricos."
    },
    {
      title: "Animações e efeitos",
      description: "Adicione vida ao seu agregador com animações suaves e efeitos visuais impressionantes."
    },
    {
      title: "Integração de mídia",
      description: "Incorpore vídeos, galerias e outros conteúdos multimídia para uma experiência completa."
    },
    {
      title: "Totalmente responsivo",
      description: "Performance perfeita em dispositivos móveis, tablets e desktops."
    },
    {
      title: "Análise de cliques",
      description: "Monitore o desempenho dos seus links com métricas detalhadas e insights."
    },
    {
      title: "Domínio personalizado",
      description: "Use seu próprio domínio para uma presença online mais profissional."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Recursos de destaque</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Vá além dos agregadores comuns com recursos que transformam links em experiências
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden group hover:shadow-purple-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-full flex flex-col">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <span className="font-display font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-display group-hover:text-gradient transition-all duration-300">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
