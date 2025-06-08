// import React from "react";

// const TopNiches = () => {
//   const services = [
//     {
//       id: 1,
//       service: "Software Development",
//       description:
//         "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
//     },
//     {
//       id: 2,
//       service: "Web Development",
//       description:
//         "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
//     },
//     {
//       id: 3,
//       service: "Data Science",
//       description:
//         "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
//     },
//     {
//       id: 4,
//       service: "Cloud Computing",
//       description:
//         "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
//     },
//     {
//       id: 5,
//       service: "DevOps",
//       description:
//         "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
//     },
//     {
//       id: 6,
//       service: "Mobile App Development",
//       description:
//         "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
//     },
//   ];

//   return (
//     <section className="services">
//       <h3>Top Niches</h3>
//       <div className="grid">
//         {services.map((element) => {
//           return (
//             <div className="card" key={element.id}>
//               <h4>{element.service}</h4>
//               <p>{element.description}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default TopNiches;


import React from "react";
import { motion } from "framer-motion";
import "./TopNiches.css";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
    },
  ];

  return (
    <section className="top-niches-section">
      <div className="left-side">
        <motion.div
          className="left-content"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Explore Our Top Niches</h2>
          <p>
            Discover the most in-demand technology services we provide to power
            your business forward.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="right-side"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="services-grid">
          {services.map((element, index) => (
            <motion.div
              className="service-card"
              key={element.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 12px 20px rgba(38, 127, 255, 0.3)",
              }}
            >
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TopNiches;
