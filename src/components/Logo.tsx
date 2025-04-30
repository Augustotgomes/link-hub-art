
import React from 'react';
import { Link2 } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showIcon = true }) => {
  // Definir tamanhos com base na prop size
  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  const iconSizeMap = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <div className="flex items-center gap-2">
      {showIcon && (
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-500 blur-sm opacity-60 animate-pulse-slow"></div>
          <div className="relative">
            <Link2 
              size={iconSizeMap[size]} 
              className="text-white" 
            />
          </div>
        </div>
      )}
      <span className={`font-bold font-display text-gradient ${textSizeClasses[size]}`}>
        lynq<span className="text-white">.bio</span>
      </span>
    </div>
  );
};

export default Logo;
