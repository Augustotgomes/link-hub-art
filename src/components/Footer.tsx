
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useClickAnalytics } from '@/hooks/use-click-analytics';

const Footer: React.FC = () => {
  const { trackClick, trackLinkAccess } = useClickAnalytics();

  // Handle external link clicks
  const handleExternalLinkClick = (url: string, text: string) => {
    trackLinkAccess({
      elementText: text,
      url: url,
      section: 'footer'
    });
  };

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" />
            <p className="text-sm text-white/60 mt-2">
              Transformando links em experiências desde 2023
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="#features" 
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, {
                elementType: 'link',
                section: 'footer',
                elementText: 'Recursos'
              })}
            >
              Recursos
            </a>
            <a 
              href="#portfolio" 
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, {
                elementType: 'link',
                section: 'footer',
                elementText: 'Exemplos'
              })}
            >
              Exemplos
            </a>
            <a 
              href="#contact" 
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={(e) => trackClick(e, {
                elementType: 'link',
                section: 'footer',
                elementText: 'Contato'
              })}
            >
              Contato
            </a>
            <Link 
              to="/analytics" 
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={(e) => {
                trackClick(e, {
                  elementType: 'link',
                  section: 'footer',
                  elementText: 'Analytics'
                });
                // We don't need to call trackLinkAccess here because useEffect will track the navigation
              }}
            >
              Analytics
            </Link>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} lynq.bio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
