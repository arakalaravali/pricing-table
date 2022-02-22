import React from "react";

export default function Plans({ name, price, features }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {name}
          </h5>
          <h6 className="card-price text-center">
            $ {price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {features.map((item, index) => {
              return (
                <li key={index} className={!item.enabled ? "text-muted" : ""}>
                  <span className="fa-li">
                    <i className={item.enabled ? "fas fa-check" : 'fas fa-times'}></i>
                  </span>
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
 }
// import React from "react";
// import Plan from "./Plan";
// import "./Plans.css";
// export default function Plans() {
//   const plans = [
//     {
//       name: "Free",
//       price: 0,
//       features: [
//         {
//           name: "Single User",
//           available: true,
//         },
//         {
//           name: "5GB Storage",
//           available: true,
//         },
//         {
//           name: "Unlimited Public Projects",
//           available: true,
//         },
//         {
//           name: "Community Access",
//           available: true,
//         },
//         {
//           name: "Unlimited Private Projects",
//           available: false,
//         },
//         {
//           name: "Dedicated Phone Support",
//           available: false,
//         },
//         {
//           name: "Free Subdomain",
//           available: false,
//         },
//         {
//           name: "Monthly Status Reports",
//           available: false,
//         },
//       ],
//     },
//     {
//         name: "Plus",
//         price: 9,
//         features: [
//           {
//             name: "Single User",
//             available: true,
//           },
//           {
//             name: "5GB Storage",
//             available: true,
//           },
//           {
//             name: "Unlimited Public Projects",
//             available: true,
//           },
//           {
//             name: "Community Access",
//             available: true,
//           },
//           {
//             name: "Unlimited Private Projects",
//             available: true,
//           },
//           {
//             name: "Dedicated Phone Support",
//             available: true,
//           },
//           {
//             name: "Free Subdomain",
//             available: true,
//           },
//           {
//             name: "Monthly Status Reports",
//             available: false,
//           },
//         ],
//       },
//       {
//         name: "Pro",
//         price: 49,
//         features: [
//           {
//             name: "Single User",
//             available: true,
//           },
//           {
//             name: "5GB Storage",
//             available: true,
//           },
//           {
//             name: "Unlimited Public Projects",
//             available: true,
//           },
//           {
//             name: "Community Access",
//             available: true,
//           },
//           {
//             name: "Unlimited Private Projects",
//             available: true,
//           },
//           {
//             name: "Dedicated Phone Support",
//             available: true,
//           },
//           {
//             name: "Free Subdomain",
//             available: true,
//           },
//           {
//             name: "Monthly Status Reports",
//             available: true,
//           },
//         ],
//       },
//   ];
//   return (
//     <section className="pricing py-5">
//       <div className="container">
//         <div className="row">
//             {
//                 plans.map((plan, index)=>{
//                     return <Plan key={index} name={plan.name} price={plan.price} features={plan.features} />
//                 })
//             }
//         </div>
//       </div>
//     </section>
//   );
// }