import React from 'react';
// import USAMap from "react-usa-map";
 
export default function Usamap() {
  /* mandatory */
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
//   const statesCustomConfig = () => {
//     return {
//       "NJ": {
//         fill: "red",
//         clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
//       },
//       "NY": {
//         fill: "#CC0000"
//       }
//     };
//   };
 
  return (
      <div></div>
      // <>
      //   <USAMap onClick={mapHandler} />
      // </>
    )
}
 
// import React, { useState } from "react";
// import USAMap from "react-usa-map";

// export default function Usamap() {
//     const [hoveredState, setHoveredState] = useState(null);

//     const mapHandler = (event) => {
//         alert(event.target.dataset.name);
//     };

//     const statesCustomConfig = () => {
//         const colors = {
//             "AL": "#CCCCCC", "AK": "#CCCCCC", "AZ": "#CCCCCC", "AR": "#CCCCCC",
//             "CA": "#CCCCCC", "CO": "#CCCCCC", "CT": "#CCCCCC", "DE": "#CCCCCC",
//             "FL": "#CCCCCC", "GA": "#CCCCCC", "HI": "#CCCCCC", "ID": "#CCCCCC",
//             "IL": "#CCCCCC", "IN": "#CCCCCC", "IA": "#CCCCCC", "KS": "#CCCCCC",
//             "KY": "#CCCCCC", "LA": "#CCCCCC", "ME": "#CCCCCC", "MD": "#CCCCCC",
//             "MA": "#CCCCCC", "MI": "#CCCCCC", "MN": "#CCCCCC", "MS": "#CCCCCC",
//             "MO": "#CCCCCC", "MT": "#CCCCCC", "NE": "#CCCCCC", "NV": "#CCCCCC",
//             "NH": "#CCCCCC", "NJ": "#CCCCCC", "NM": "#CCCCCC", "NY": "#CCCCCC",
//             "NC": "#CCCCCC", "ND": "#CCCCCC", "OH": "#CCCCCC", "OK": "#CCCCCC",
//             "OR": "#CCCCCC", "PA": "#CCCCCC", "RI": "#CCCCCC", "SC": "#CCCCCC",
//             "SD": "#CCCCCC", "TN": "#CCCCCC", "TX": "#CCCCCC", "UT": "#CCCCCC",
//             "VT": "#CCCCCC", "VA": "#CCCCCC", "WA": "#CCCCCC", "WV": "#CCCCCC",
//             "WI": "#CCCCCC", "WY": "#CCCCCC"
//         };

//         const states = {};
//         for (const state in colors) {
//             states[state] = {
//                 fill: hoveredState === state ? "black" : colors[state],
//                 onMouseEnter: () => setHoveredState(state),
//                 onMouseLeave: () => setHoveredState(null)
//             };
//         }
//         return states;
//     };

//     return (
//         <div>
//             <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
//         </div>
//     );
// }
