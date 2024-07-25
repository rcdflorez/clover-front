// import React, { useState } from 'react';
// import { Tabs } from '../components/Tabs';

// const tabsData = [
//   {
//     title: "Personal Info",
//     fields: [
//       { type: "input", inputType: "text", name: "firstName", placeholder: "First Name", className: "rounded-3xl bg-gray-300 p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2" },
//       { type: "input", inputType: "text", name: "lastName", placeholder: "Last Name", className: "rounded-3xl bg-gray-300 p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2" },
//       // Add other fields similarly
//     ],
//   },
//   {
//     title: "Financial Details",
//     fields: [
//       { type: "input", inputType: "number", name: "accountNumber", placeholder: "Account Number", className: "rounded-3xl bg-gray-300 p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2" },
//       { type: "input", inputType: "number", name: "routingNumber", placeholder: "Routing Number", className: "rounded-3xl bg-gray-300 p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2" },
//       // Add other fields similarly
//     ],
//   },
//   {
//     title: "Agreements",
//     fields: [
//       { type: "input", inputType: "text", name: "privacyPolicy", placeholder: "Privacy Policy", className: "text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2", readOnly: true },
//       { type: "input", inputType: "text", name: "termsOfUse", placeholder: "Terms of Use", className: "text-yellow-600 font-bold bg-yellow-200  rounded-3xl p-2", wrapperClassName: "grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 pt-4 gap-2", readOnly: true },
//       // Add other fields similarly
//     ],
//   },
// ];

// const App = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     // Add initial state for all form fields
//   });

//   const handleSubmit = (e, tabIndex) => {
//     e.preventDefault();
//     console.log(`Form data for tab ${tabIndex}:`, formData);
//     // Handle form submission logic
//   };

//   return (
//     <div className="App">
//       <Tabs
//         tabsData={tabsData}
//         formData={formData}
//         setFormData={setFormData}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from "react";

// export function Tabs({
//   tabsData,
//   formData,
//   setFormData,
//   handleSubmit,
//   formClassName = "text-xs",
//   buttonClassName = "m-2 w-[150px] px-2 py-1 text-sm bg-green-600 text-white rounded-full",
// }) {
//   const [currentTab, setCurrentTab] = useState(0);

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const tabs = tabsData.map((tab, index) => ({
//     title: tab.title,
//     content: (
//       <form className={formClassName} onSubmit={(e) => handleSubmit(e, index)}>
//         <div className="p-4 overflow-y-scroll h-[250px]">
//           {tab.fields.map((field, idx) => (
//             <div key={idx} className={field.wrapperClassName}>
//               {field.type === "input" && (
//                 <input
//                   type={field.inputType}
//                   placeholder={field.placeholder}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                   className={field.className}
//                 />
//               )}
//               {field.type === "select" && (
//                 <select
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                   className={field.className}
//                 >
//                   {field.options.map((option, optIdx) => (
//                     <option key={optIdx} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               )}
//               {field.type === "textarea" && (
//                 <textarea
//                   rows={field.rows}
//                   placeholder={field.placeholder}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleInputChange}
//                   className={field.className}
//                 />
//               )}
//               {field.type === "checkbox" && (
//                 <div className={field.wrapperClassName}>
//                   <input
//                     type="checkbox"
//                     name={field.name}
//                     checked={formData[field.name]}
//                     onChange={handleInputChange}
//                     className={field.className}
//                   />
//                   <label>{field.label}</label>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="bg-gray-200 text-center rounded-b-2xl">
//           <button className={buttonClassName}>{`Continue >`}</button>
//         </div>
//       </form>
//     ),
//   }));

//   const progressBarWidth = `${((currentTab + 1) / tabs.length) * 100}%`;

//   return (
//     <div className="w-full mx-auto rounded-b-2xl bg-none shadow-2xl">
//       <div className="flex justify-center bg-gray-200 py-2 rounded-t-2xl">
//         <h1 className="text-lg font-bold text-gray-500">{tabs[currentTab]?.title}</h1>
//       </div>
//       <div className="w-full bg-gray-200 h-1">
//         <div
//           className="bg-green-600 h-full transition-width duration-500"
//           style={{ width: progressBarWidth }}
//         ></div>
//       </div>
//       <div className="bg-white text-gray-700 rounded-b-2xl">
//         {tabs[currentTab]?.content}
//       </div>
//     </div>
//   );
// }
