
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
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
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#portfolio" className="text-sm text-white/60 hover:text-white transition-colors">
              Exemplos
            </a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">
              Contato
            </a>
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
