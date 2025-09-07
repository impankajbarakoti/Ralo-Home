// import { useState } from "react";

// const MortgageCalculator = () => {
//   const [totalAmount, setTotalAmount] = useState("");
//   const [interestRate, setInterestRate] = useState("");
//   const [downPayment, setDownPayment] = useState("");
//   const [mortgagePeriod, setMortgagePeriod] = useState("");
//   const [result, setResult] = useState(null);

//   const calculateMortgage = () => {
//     const principal =
//       parseFloat(totalAmount || 0) - parseFloat(downPayment || 0);
//     const annualRate = parseFloat(interestRate || 0) / 100;
//     const r = annualRate / 12; // monthly rate
//     const n = parseInt(mortgagePeriod || 0) * 12; // months

//     if (principal > 0 && r > 0 && n > 0) {
//       const M = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
//       const totalPayment = M * n;
//       const totalInterest = totalPayment - principal;

//       setResult({
//         monthlyPayment: M.toFixed(2),
//         principal: principal.toFixed(2),
//         totalPayment: totalPayment.toFixed(2),
//         totalInterest: totalInterest.toFixed(2),
//         years: mortgagePeriod,
//       });
//     } else {
//       setResult({ error: "Please enter valid numeric values in all fields." });
//     }
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <p className="text-gray-600 text-base sm:text-lg">
//               We truly care about what is best for you! From pre-approval to
//               closing, our goal is to provide you with the best service while
//               saving you money.
//             </p>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">
//                   78%
//                 </div>
//                 <p className="text-sm text-gray-500">Business from Referrals</p>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">
//                   45+
//                 </div>
//                 <p className="text-sm text-gray-500">
//                   Minute Verbal Commitment
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <div className="flex -space-x-2">
//                 {["1", "2", "3", "4"].map((img) => (
//                   <img
//                     key={img}
//                     src={`/professional-headshot-${img}.png`}
//                     alt="Client"
//                     className="w-10 h-10 rounded-full border-2 border-white"
//                   />
//                 ))}
//               </div>
//               <div>
//                 <p className="font-semibold text-sm">5000+ Popular Clients</p>
//                 <button className="text-green-600 text-sm font-medium">
//                   Know More About Us →
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Calculator */}
//           <div className="bg-white shadow-md rounded-xl p-6 sm:p-8">
//             <h3 className="text-xl font-semibold mb-4">
//               Calculate your Mortgage
//             </h3>
//             <div className="space-y-4">
//               <InputField
//                 label="Total Amount"
//                 value={totalAmount}
//                 onChange={(e) => setTotalAmount(e.target.value)}
//                 placeholder="e.g. 300000"
//               />
//               <InputField
//                 label="Interest Rate (%)"
//                 value={interestRate}
//                 onChange={(e) => setInterestRate(e.target.value)}
//                 placeholder="e.g. 5.5"
//               />
//               <InputField
//                 label="Down Payment"
//                 value={downPayment}
//                 onChange={(e) => setDownPayment(e.target.value)}
//                 placeholder="e.g. 50000"
//               />
//               <InputField
//                 label="Mortgage Period (years)"
//                 value={mortgagePeriod}
//                 onChange={(e) => setMortgagePeriod(e.target.value)}
//                 placeholder="e.g. 30"
//               />

//               <button
//                 onClick={calculateMortgage}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg mt-2"
//               >
//                 Calculate Mortgage
//               </button>

//               {result && (
//                 <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
//                   {result.error ? (
//                     <p className="text-red-600 font-medium">{result.error}</p>
//                   ) : (
//                     <>
//                       <p className="text-lg font-semibold text-green-700 mb-2">
//                         Monthly Payment:{" "}
//                         <span className="text-green-900">
//                           ${result.monthlyPayment}
//                         </span>
//                       </p>
//                       <ul className="text-sm text-gray-700 space-y-1">
//                         <li>
//                           Loan Amount (after Down Payment): ${result.principal}
//                         </li>
//                         <li>Loan Term: {result.years} years</li>
//                         <li>Total Interest Paid: ${result.totalInterest}</li>
//                         <li>
//                           Total Paid (Principal + Interest): $
//                           {result.totalPayment}
//                         </li>
//                       </ul>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Reusable Input Field Component
// const InputField = ({ label, value, onChange, placeholder }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input
//       type="number"
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
//     />
//   </div>
// );

// export default MortgageCalculator;
