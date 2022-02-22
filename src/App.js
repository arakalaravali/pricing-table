import Plans from "./Plans";
import "./App.css";

function App() {
  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        { name: "Single User", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: false },
        { name: "Dedicated Phone Support", enabled: false },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false }
      ],
    },
    {
      name: "Plus",
      price: 9,
      features: [
        { name: "Single User", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: false }
      ],
    },
    {
      name: "pro",
      price: 49,
      features: [
        { name: "Single User", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: true }
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            plans.map((plan, index) => {
              return <Plans key={index} name={plan.name} price={plan.price} features={plan.features} />
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;







// // import { FunctionDemo, SecondDemo } from "./DemoFunction";
// // import DocComponent from "./DocComponent";
// // import ClassDemo from "./DemoClass";
// import "./App.css";
// import {useState} from 'react';

// function App() {
//   const [clickedTitle, setClickedTitle] = useState('');
//   const sections = [
//     {
//       color: "red",
//       title: "Declarative",
//       extraContent: {show: true, content: 'For red title'},
//       description:
//         "Decalrative description Decalrative description Decalrative descriptionDecalrative description",
//     },
//     {
//       color: "blue",
//       title: "Component Based",
//       extraContent: {show: false, content: 'For blue title'},
//       description:
//         "Component Based Component BasedComponent BasedComponent Based",
//     },
//     {
//       color: "green",
//       title: "Use ANywhere",
//       extraContent: {show: false, content: 'For green title'},
//       description:
//         "Use ANywhere Use ANywhere Use ANywhere Use ANywhere Use ANywhere",
//     },
//   ];
//   return (
//     <div>
//       {/* <FunctionDemo />
//       <SecondDemo />
//       <ClassDemo /> */}
//       <h1>{clickedTitle}</h1>
//       <div style={{ display: "flex" }} className="container">
//         {sections.map((item, index) => {
//           return (
//             // <DocComponent
//               key={index}
//               color={item.color}
//               title={item.title}
//               description={item.description}
//               extraContent={item.extraContent}
//               clickHandler={(title)=> setClickedTitle(title)}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
