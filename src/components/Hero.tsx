// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(93,52,236,0.15),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight">
              Transforme seus links em{" "}
              <span className="text-gradient">mini sites</span> com design
              exclusivo
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Destaque-se com agregadores de links personalizados que
              impressionam seus seguidores com design arrojado, efeitos visuais
              e experiências interativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://api.whatsapp.com/send/?phone=5511989342578&text=Ola+Tenho+interesse+em+criar+meu+LynqBio+vamos+nessa?&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Criar meu lynq.bio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://lynq.bio/sramaravilha">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10"
                >
                  Ver demonstrações
                </Button>
              </a>
            </div>
          </div>

          {/* Mockup/Visual Element */}
          <div className="relative w-full max-w-md mt-12 md:mt-0">
            <div className="glass-card rounded-2xl p-1 shadow-xl animate-float">
              <div className="aspect-[9/16] rounded-xl overflow-hidden">
                <img
                  src="BOKAsp BIO.png"
                  alt="Link hub preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 filter blur-md opacity-70 animate-pulse-slow" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 filter blur-md opacity-70 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
