
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './Logo';
import { useClickAnalytics } from '@/hooks/use-click-analytics';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { trackClick } = useClickAnalytics();

  return (
    <nav className="fixed w-full z-50 py-4 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => trackClick(e, { 
              elementType: 'logo', 
              section: 'navbar', 
              elementText: 'Logo' 
            })}
          >
            <Logo size={isMobile ? "sm" : "md"} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, { 
                elementType: 'link', 
                section: 'navbar', 
                elementText: 'Recursos' 
              })}
            >
              Recursos
            </a>
            <a 
              href="#portfolio" 
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, { 
                elementType: 'link', 
                section: 'navbar', 
                elementText: 'Exemplos' 
              })}
            >
              Exemplos
            </a>
            <a 
              href="#contact" 
              className="text-sm text-white/80 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, { 
                elementType: 'link', 
                section: 'navbar', 
                elementText: 'Contato' 
              })}
            >
              Contato
            </a>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={(e) => trackClick(e, { 
                elementType: 'button', 
                section: 'navbar', 
                elementText: 'Começar agora' 
              })}
            >
              Começar agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => {
                setIsMenuOpen(!isMenuOpen);
                trackClick(e, { 
                  elementType: 'button', 
                  section: 'navbar', 
                  elementText: isMenuOpen ? 'Close Menu' : 'Open Menu' 
                });
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 p-4 bg-background shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-sm py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  trackClick(e, { 
                    elementType: 'link', 
                    section: 'navbar-mobile', 
                    elementText: 'Recursos' 
                  });
                }}
              >
                Recursos
              </a>
              <a 
                href="#portfolio" 
                className="text-sm py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  trackClick(e, { 
                    elementType: 'link', 
                    section: 'navbar-mobile', 
                    elementText: 'Exemplos' 
                  });
                }}
              >
                Exemplos
              </a>
              <a 
                href="#contact" 
                className="text-sm py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  trackClick(e, { 
                    elementType: 'link', 
                    section: 'navbar-mobile', 
                    elementText: 'Contato' 
                  });
                }}
              >
                Contato
              </a>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  trackClick(e, { 
                    elementType: 'button', 
                    section: 'navbar-mobile', 
                    elementText: 'Começar agora' 
                  });
                }}
              >
                Começar agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
