// import React, { useState } from "react";

// const BoxTextHover = ({ text = "Mustapha" }) => {
//   const [hoveredColors, setHoveredColors] = useState({});

//   const textToBoxes = (text) => {
//     const letterMap = {
//       H: [
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [1, 1, 1, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//       ],
//       O: [
//         [0, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [0, 1, 1, 0],
//       ],
//       V: [
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [0, 1, 1, 0],
//         [0, 0, 1, 0],
//       ],
//       E: [
//         [1, 1, 1, 1],
//         [1, 0, 0, 0],
//         [1, 1, 1, 0],
//         [1, 0, 0, 0],
//         [1, 1, 1, 1],
//       ],
//       R: [
//         [1, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 1, 1, 0],
//         [1, 0, 1, 0],
//         [1, 0, 0, 1],
//       ],
//       M: [
//         [1, 0, 0, 0, 1],
//         [1, 1, 0, 1, 1],
//         [1, 0, 1, 0, 1],
//         [1, 0, 0, 0, 1],
//         [1, 0, 0, 0, 1],
//       ],
//       U: [
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//         [0, 1, 1, 0],
//       ],
//       S: [
//         [0, 1, 1, 1],
//         [1, 0, 0, 0],
//         [0, 1, 1, 0],
//         [0, 0, 0, 1],
//         [1, 1, 1, 0],
//       ],
//       T: [
//         [1, 1, 1, 1, 1],
//         [0, 0, 1, 0, 0],
//         [0, 0, 1, 0, 0],
//         [0, 0, 1, 0, 0],
//         [0, 0, 1, 0, 0],
//       ],
//       A: [
//         [0, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 1, 1, 1],
//         [1, 0, 0, 1],
//         [1, 0, 0, 1],
//       ],
//       P: [
//         [1, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 1, 1, 0],
//         [1, 0, 0, 0],
//         [1, 0, 0, 0],
//       ],
//       B: [
//         [1, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 1, 1, 0],
//         [1, 0, 0, 1],
//         [1, 1, 1, 0],
//       ],
//       Z: [
//         [1, 1, 1, 1],
//         [0, 0, 0, 1],
//         [0, 1, 1, 0],
//         [1, 0, 0, 0],
//         [1, 1, 1, 1],
//       ],
//       " ": [
//         [0, 0],
//         [0, 0],
//         [0, 0],
//         [0, 0],
//         [0, 0],
//       ],
//     };

//     return text.split("").map((char, charIndex) => ({
//       char,
//       boxes: letterMap[char.toUpperCase()] || letterMap[" "],
//       charIndex,
//     }));
//   };

//   const letters = textToBoxes(text);

//   const randomColor = () => {
//     const colors = [
//       "#FF6B6B",
//       "#4ECDC4",
//       "#45B7D1",
//       "#FFA07A",
//       "#98D8C8",
//       "#F7DC6F",
//       "#BB8FCE",
//       "#85C1E2",
//       "#F8B739",
//       "#52B788",
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

//   const handleMouseEnter = (index) => {
//     setHoveredColors((prev) => ({
//       ...prev,
//       [index]: randomColor(),
//     }));
//   };

//   const handleMouseLeave = (index) => {
//     setHoveredColors((prev) => {
//       const updated = { ...prev };
//       delete updated[index];
//       return updated;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
//       <div className="flex items-center gap-2">
//         {letters.map(({ boxes, charIndex }) => (
//           <div key={charIndex} className="flex flex-col gap-0.5">
//             {boxes.map((row, rowIndex) => (
//               <div key={rowIndex} className="flex gap-0.5">
//                 {row.map((isActive, colIndex) => {
//                   if (!isActive) {
//                     return <div key={colIndex} className="w-4 h-4" />;
//                   }

//                   const globalIndex = `${charIndex}-${rowIndex}-${colIndex}`;
//                   const isHovered = hoveredColors[globalIndex];

//                   return (
//                     <div
//                       key={colIndex}
//                       className="w-4 h-4 transition-all duration-300 cursor-pointer shadow-md"
//                       style={{
//                         backgroundColor: isHovered
//                           ? hoveredColors[globalIndex]
//                           : "#4a5568",
//                         transform: isHovered
//                           ? "scale(1.25) rotate(8deg)"
//                           : "scale(1)",
//                         border: "1px solid #2d3748",
//                       }}
//                       onMouseEnter={() => handleMouseEnter(globalIndex)}
//                       onMouseLeave={() => handleMouseLeave(globalIndex)}
//                     />
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoxTextHover;

import React, { useState } from "react";

const BoxTextHover = ({ text = "Mustapha" }) => {
  const [hoveredColors, setHoveredColors] = useState({});

  const textToBoxes = (text) => {
    const letterMap = {
      H: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
      ],
      O: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
      ],
      V: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
      ],
      E: [
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
      ],
      R: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 1, 0],
        [1, 0, 0, 1],
      ],
      M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      U: [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 1, 0],
      ],
      S: [
        [0, 1, 1, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [1, 1, 1, 0],
      ],
      T: [
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
      ],
      A: [
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
      ],
      P: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ],
      B: [
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 0],
      ],
      Z: [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 1, 1, 0],
        [1, 0, 0, 0],
        [1, 1, 1, 1],
      ],
      " ": [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    };

    return text.split("").map((char, charIndex) => ({
      char,
      boxes: letterMap[char.toUpperCase()] || letterMap[" "],
      charIndex,
    }));
  };

  const letters = textToBoxes(text);

  const randomColor = () => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA07A",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#85C1E2",
      "#F8B739",
      "#52B788",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseEnter = (index) => {
    setHoveredColors((prev) => ({
      ...prev,
      [index]: randomColor(),
    }));
  };

  const handleMouseLeave = (index) => {
    setHoveredColors((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="flex items-center gap-2">
        {letters.map(({ boxes, charIndex }) => (
          <div key={charIndex} className="flex flex-col gap-0.5">
            {boxes.map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-0.5">
                {row.map((isActive, colIndex) => {
                  if (!isActive) {
                    return <div key={colIndex} className="w-4 h-4" />;
                  }

                  const globalIndex = `${charIndex}-${rowIndex}-${colIndex}`;
                  const isHovered = hoveredColors[globalIndex];

                  return (
                    <div
                      key={colIndex}
                      className="w-4 h-4 cursor-pointer shadow-md"
                      style={{
                        backgroundColor: isHovered
                          ? hoveredColors[globalIndex]
                          : "#4a5568",
                        transform: isHovered
                          ? "scale(1.25) rotate(8deg)"
                          : "scale(1)",
                        border: "1px solid #2d3748",
                      }}
                      onMouseEnter={() => handleMouseEnter(globalIndex)}
                      onMouseLeave={() => handleMouseLeave(globalIndex)}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxTextHover;
