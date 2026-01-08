import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // Set the URL only after mounting to ensure window is available
    setPageUrl(window.location.href);
  }, []);

  return (
    <div className="mt-24">
        <div className="border-t-2 border-dashed border-stone-300 w-full mb-8"></div>
        
        <div className="flex flex-col items-center justify-center gap-5">
          <span className="font-serif font-bold text-lg text-ink">Share this page:</span>
          
          <div className="p-3 bg-white rounded-xl shadow-sm border border-stone-200">
            {pageUrl && (
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(pageUrl)}&color=1c1917&bgcolor=ffffff`}
                alt="QR Code"
                className="w-32 h-32 block mix-blend-multiply"
              />
            )}
          </div>
        </div>
      </div>
  );
};

export default Footer;