import React from 'react';

const AdaLabsFooter = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] bg-black w-full px-2 overflow-hidden">
      <div 
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl select-none group cursor-pointer transition-all duration-300 ease-in-out w-full text-center max-w-full"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontWeight: '900',
          color: 'transparent',
          WebkitTextStroke: '2px #F5F5F5',
          textStroke: '2px #F5F5F5',
          transform: 'scale(1.5)', // Increased for maximum width coverage
          letterSpacing: '0.05em', // Reduced to minimize gaps
          paintOrder: 'stroke fill',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility'
        }}
      >
        <span className="group-hover:text-white transition-all duration-300 ease-in-out inline-block">
          {'ADALABS'.split('').map((letter, index) => (
            <span 
              key={index} 
              className="inline-block"
              style={{
                WebkitTextStroke: '2px #F5F5F5',
                textStroke: '2px #F5F5F5',
                paintOrder: 'stroke fill',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default AdaLabsFooter;