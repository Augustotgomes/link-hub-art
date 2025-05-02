import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(93,52,236,0.2),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="glass-card border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                    Pronto para criar seu LynqBio personalizado?
                  </h2>
                  <p className="text-white/70 mb-6">
                    Entre em contato e vamos discutir como podemos transformar
                    seus links em uma experiência impressionante para seus
                    seguidores.
                  </p>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <p>Conte-nos sobre seu projeto</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <p>Receba uma proposta personalizada</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <p>Veja seu LynqBio ganhar vida</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 font-display">
                    Solicite um orçamento
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <Input
                        placeholder="Seu nome"
                        className="bg-white/10 border-white/20 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email"
                        className="bg-white/10 border-white/20 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Whatsapp"
                        className="bg-white/10 border-white/20 focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Conte-nos sobre seu projeto"
                        className="w-full rounded-md bg-white/10 border-white/20 focus:border-purple-500 p-3 min-h-[100px]"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Enviar mensagem
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
