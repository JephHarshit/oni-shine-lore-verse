import React from 'react';

const TheySaidSection = () => {
  const topRowQuotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum sit amet",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  ];

  const bottomRowQuotes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    "Lorem ipsum dolor sit amet, consectetur adipiscing",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
  ];

  // Create multiple copies for seamless loop
  const topQuotesExtended = [...topRowQuotes, ...topRowQuotes, ...topRowQuotes];
  const bottomQuotesExtended = [...bottomRowQuotes, ...bottomRowQuotes, ...bottomRowQuotes];

  return (
    <section id="they-said" className="py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">THEY SAID</h2>
        <p className="text-black/50 italic text-lg">'we only heard them say these, no one else'</p>
      </div>

      <div className="space-y-8">
        {/* Top Row - Scrolling Left */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-left">
            {topQuotesExtended.map((quote, index) => (
              <div
                key={index}
                className="bg-[#FDF0D5]/50 rounded-2xl p-6 min-w-[300px] max-w-[400px] shadow-lg flex-shrink-0"
              >
                <p className="text-black whitespace-normal text-sm leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolling Right */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-right">
            {bottomQuotesExtended.map((quote, index) => (
              <div
                key={index}
                className="bg-[#FFC5C5]/35 rounded-2xl p-6 min-w-[300px] max-w-[400px] shadow-lg flex-shrink-0"
              >
                <p className="text-black whitespace-normal text-sm leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheySaidSection;
