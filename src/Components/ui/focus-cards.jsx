import React, { useState } from "react";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-white overflow-hidden transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      "w-[20v 0px] h-[200px]" 
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover w-full h-full" 
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col justify-start py-4 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium text-white">
        {card.title}
      </div>
      <div className="text-sm text-white mt-2">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
