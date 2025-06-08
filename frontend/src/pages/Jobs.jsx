// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toast } from "react-toastify";
// // import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
// // import Spinner from "../components/Spinner";
// // import { FaSearch } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Jobs = () => {
// //   const [city, setCity] = useState("");
// //   const [selectedCity, setSelectedCity] = useState("");
// //   const [niche, setNiche] = useState("");
// //   const [selectedNiche, setSelectedNiche] = useState("");
// //   const [searchKeyword, setSearchKeyword] = useState("");

// //   const { jobs, loading, error } = useSelector((state) => state.jobs);

// //   const handleCityChange = (city) => {
// //     setCity(city);
// //     setSelectedCity(city);
// //   };
// //   const handleNicheChange = (niche) => {
// //     setNiche(niche);
// //     setSelectedNiche(niche);
// //   };

// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearAllJobErrors());
// //     }
// //     dispatch(fetchJobs(city, niche, searchKeyword));
// //   }, [dispatch, error, city, niche]);

// //   const handleSearch = () => {
// //     dispatch(fetchJobs(city, niche, searchKeyword));
// //   };

// //   const cities = [
// //     "All",
// //     "Bangalore",
// //     "Hyderabad",
// //     "Chennai",
// //     "Mumbai",
// //     "Pune",
// //     "Delhi",
// //     "Kolkata",
// //     "Noida",
// //     "Gurgaon",
// //     "Gurugram",
// //     "Ahmedabad",
// //     "Vizeg",
// //     "Lucknow",
// //     "Bhopal",
// //     "Jaipur",
// //     "Indore",
// //     "Kanpur",
// //     "Nagpur",
// //     "Patna",
// //     "Vadodara",
// //   ];

// //   const nichesArray = [
// //     "All",
// //     "Software Development",
// //     "Web Development",
// //     "Cybersecurity",
// //     "Data Science",
// //     "Artificial Intelligence",
// //     "Cloud Computing",
// //     "DevOps",
// //     "Mobile App Development",
// //     "Blockchain",
// //     "Database Administration",
// //     "Quantitative Trader",
// //     "UI/UX Design",
// //     "Game Development",
// //     "IoT (Internet of Things)",
// //     "Big Data",
// //     "Machine Learning",
// //     "IT Project Management",
// //     "IT Support and Helpdesk",
// //     "Systems Administration",
// //     "IT Consulting",
// //   ];

// //   return (
// //     <>
// //       {loading ? (
// //         <Spinner />
// //       ) : (
// //         <section className="jobs">
// //           <div className="search-tab-wrapper">
// //             <input
// //               type="text"
// //               value={searchKeyword}
// //               onChange={(e) => setSearchKeyword(e.target.value)}
// //             />
// //             <button onClick={handleSearch}>Find Job</button>
// //             <FaSearch />
// //           </div>
// //           <div className="wrapper">
// //             <div className="filter-bar">
// //               <div className="cities">
// //                 <h2>Filter Job By City</h2>
// //                 {cities.map((city, index) => (
// //                   <>
// //                   <div key={index}>
// //                     <input
// //                       type="radio"
// //                       id={city}
// //                       name="city"
// //                       value={city}
// //                       checked={selectedCity === city}
// //                       onChange={() => handleCityChange(city)}
// //                       />
// //                     <label htmlFor={city}>{city}</label>
// //                   </div>
// //                       </>
// //                 ))}
// //               </div>
// //               <div className="cities">
// //                 <h2>Filter Job By Niche</h2>
// //                 {nichesArray.map((niche, index) => (
// //                   <div key={index}>
// //                     <input
// //                       type="radio"
// //                       id={niche}
// //                       name="niche"
// //                       value={niche}
// //                       checked={selectedNiche === niche}
// //                       onChange={() => handleNicheChange(niche)}
// //                     />
// //                     <label htmlFor={niche}>{niche}</label>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="container">
// //               <div className="mobile-filter">
// //                 <select value={city} onChange={(e) => setCity(e.target.value)}>
// //                   <option value="">Filter By City</option>
// //                   {cities.map((city, index) => (
// //                     <option value={city} key={index}>
// //                       {city}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <select
// //                   value={niche}
// //                   onChange={(e) => setNiche(e.target.value)}
// //                 >
// //                   <option value="">Filter By Niche</option>
// //                   {nichesArray.map((niche, index) => (
// //                     <option value={niche} key={index}>
// //                       {niche}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="jobs_container">
// //                 {jobs && jobs.length > 0 ? (jobs.map((element) => {
// //                     return (
// //                       <div className="card" key={element._id}>
// //                         {element.hiringMultipleCandidates === "Yes" ? (
// //                           <p className="hiring-multiple">
// //                             Hiring Multiple Candidates
// //                           </p>
// //                         ) : (
// //                           <p className="hiring">Hiring</p>
// //                         )}
// //                         <p className="title">{element.title}</p>
// //                         <p className="company">{element.companyName}</p>
// //                         <p className="location">{element.location}</p>
// //                         <p className="salary">
// //                           <span>Salary:</span> Rs. {element.salary}
// //                         </p>
// //                         <p className="posted">
// //                           <span>Posted On:</span>{" "}
// //                           {element.jobPostedOn.substring(0, 10)}
// //                         </p>
// //                         <div className="btn-wrapper">
// //                           <Link
// //                             className="btn"
// //                             to={`/post/application/${element._id}`}
// //                           >
// //                             Apply Now
// //                           </Link>
// //                         </div>
// //                       </div>
// //                     );
// //                   })) : (
// //                   /************************************************************/
// //                   /* BUG No.2 */
// //                   <img src="./notfound.png" alt="job-not-found" style={{width: "100%"}}/>)
// //                   /************************************************************/




// //                   }
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       )}
// //     </>
// //   );
// // };

// // export default Jobs;







// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
// import Spinner from "../components/Spinner";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import './jobs.css';

// const Jobs = () => {
//   const [city, setCity] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [niche, setNiche] = useState("");
//   const [selectedNiche, setSelectedNiche] = useState("");
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [searchTimeout, setSearchTimeout] = useState(null);

//   const { jobs, loading, error } = useSelector((state) => state.jobs);
//   const dispatch = useDispatch();

//   const handleCityChange = (city) => {
//     setCity(city);
//     setSelectedCity(city);
//   };

//   const handleNicheChange = (niche) => {
//     setNiche(niche);
//     setSelectedNiche(niche);
//   };

//   const handleSearch = () => {
//     if (searchTimeout) clearTimeout(searchTimeout);
//     setSearchTimeout(
//       setTimeout(() => {
//         dispatch(fetchJobs(city, niche, searchKeyword));
//       }, 500)
//     );
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     dispatch(fetchJobs(city, niche, searchKeyword));
//   }, [dispatch, error, city, niche, searchKeyword]);

//   const cities = [
//     "All",
//     "Bangalore",
//     "Hyderabad",
//     "Chennai",
//     "Mumbai",
//     "Pune",
//     "Delhi",
//     "Kolkata",
//     "Noida",
//     "Gurgaon",
//     "Gurugram",
//     "Ahmedabad",
//     "Vizeg",
//     "Lucknow",
//     "Bhopal",
//     "Jaipur",
//     "Indore",
//     "Kanpur",
//     "Nagpur",
//     "Patna",
//     "Vadodara",
//   ];

//   const nichesArray = [
//     "All",
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Quantitative Trader",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   return (
//     <div className="jobs-page">
//       {loading ? (
//         <div className="loading-container">
//           <Spinner />
//         </div>
//       ) : (
//         <div className="jobs-container">
//           <div className="search-container">
//             <input
//               type="text"
//               value={searchKeyword}
//               onChange={(e) => setSearchKeyword(e.target.value)}
//               placeholder="Search jobs..."
//               className="search-input"
//             />
//             <button onClick={handleSearch} className="search-button">
//               <FaSearch /> Find Job
//             </button>
//           </div>

//           <div className="jobs-layout">
//             <div className="sidebar-filters">
//               <div className="filter-section">
//                 <h3>Filter by City</h3>
//                 {cities.map((city) => (
//                   <div key={city} className="filter-option">
//                     <input
//                       type="radio"
//                       id={`city-${city}`}
//                       name="city"
//                       value={city}
//                       checked={selectedCity === city}
//                       onChange={() => handleCityChange(city)}
//                     />
//                     <label htmlFor={`city-${city}`}>{city}</label>
//                   </div>
//                 ))}
//               </div>

//               <div className="filter-section">
//                 <h3>Filter by Niche</h3>
//                 {nichesArray.map((niche) => (
//                   <div key={niche} className="filter-option">
//                     <input
//                       type="radio"
//                       id={`niche-${niche}`}
//                       name="niche"
//                       value={niche}
//                       checked={selectedNiche === niche}
//                       onChange={() => handleNicheChange(niche)}
//                     />
//                     <label htmlFor={`niche-${niche}`}>{niche}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="jobs-grid">
//               {jobs && jobs.length > 0 ? (
//                 jobs.map((job) => (
//                   <div className="job-card" key={job._id}>
//                     {job.hiringMultipleCandidates === "Yes" ? (
//                       <p className="hiring-badge multiple">Hiring Multiple</p>
//                     ) : (
//                       <p className="hiring-badge">Hiring</p>
//                     )}
//                     <h3 className="job-title">{job.title}</h3>
//                     <p className="company-name">{job.companyName}</p>
//                     <p className="job-location">{job.location}</p>
//                     <p className="job-salary">
//                       <span>Salary:</span> Rs. {job.salary}
//                     </p>
//                     <p className="job-posted">
//                       <span>Posted On:</span> {job.jobPostedOn?.substring(0, 10)}
//                     </p>
//                     <Link
//                       to={`/post/application/${job._id}`}
//                       className="apply-button"
//                     >
//                       Apply Now
//                     </Link>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-jobs-found">
//                   <img
//                     src="./notfound.png"
//                     alt="No jobs found"
//                     className="no-jobs-image"
//                   />
//                   <p>No jobs found matching your criteria</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Jobs;





import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./jobs.css";

const Jobs = () => {
  const [filters, setFilters] = useState({
    city: "",
    niche: "",
    searchKeyword: ""
  });
  const [searchTimeout, setSearchTimeout] = useState(null);

  const { jobs, loading, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  // Debounced filter update
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchJobs({
          city: filters.city,
          niche: filters.niche,
          searchKeyword: filters.searchKeyword
        }));
      } catch (err) {
        toast.error(err.message);
      }
    };

    if (searchTimeout) clearTimeout(searchTimeout);
    
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    setSearchTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [dispatch, filters]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
  }, [dispatch, error]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value === "All" ? "" : value
    }));
  };

  const handleSearchInput = (e) => {
    setFilters(prev => ({
      ...prev,
      searchKeyword: e.target.value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs({
      city: filters.city,
      niche: filters.niche,
      searchKeyword: filters.searchKeyword
    }));
  };

  const cities = [
    "All",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Mumbai",
    "Pune",
    "Delhi",
    "Kolkata",
    "Noida",
    "Gurgaon",
    "Gurugram",
    "Ahmedabad",
    "Vizeg",
    "Lucknow",
    "Bhopal",
    "Jaipur",
    "Indore",
    "Kanpur",
    "Nagpur",
    "Patna",
    "Vadodara",
  ];

  const nichesArray = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Quantitative Trader",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <div className="jobs-page">
      {loading ? (
        <div className="loading-container">
          <Spinner />
        </div>
      ) : (
        <div className="jobs-container">
          <form onSubmit={handleSearchSubmit} className="search-container">
            <input
              type="text"
              value={filters.searchKeyword}
              onChange={handleSearchInput}
              placeholder="Search by job title, company..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch className="search-icon" /> Search
            </button>
          </form>

          <div className="jobs-layout">
            <div className="sidebar-filters">
              <div className="filter-section">
                <h3 className="filter-title">Filter by Location</h3>
                <div className="filter-options">
                  {cities.map((city) => (
                    <div key={city} className="filter-option">
                      <input
                        type="radio"
                        id={`city-${city}`}
                        name="city"
                        checked={filters.city === (city === "All" ? "" : city)}
                        onChange={() => handleFilterChange("city", city)}
                        className="filter-radio"
                      />
                      <label htmlFor={`city-${city}`} className="filter-label">
                        {city}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Filter by Job Type</h3>
                <div className="filter-options">
                  {nichesArray.map((niche) => (
                    <div key={niche} className="filter-option">
                      <input
                        type="radio"
                        id={`niche-${niche}`}
                        name="niche"
                        checked={filters.niche === (niche === "All" ? "" : niche)}
                        onChange={() => handleFilterChange("niche", niche)}
                        className="filter-radio"
                      />
                      <label htmlFor={`niche-${niche}`} className="filter-label">
                        {niche}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="jobs-main">
              <div className="mobile-filters">
                <select
                  value={filters.city || "All"}
                  onChange={(e) => handleFilterChange("city", e.target.value)}
                  className="mobile-filter-select"
                >
                  <option value="All">All Locations</option>
                  {cities.filter(c => c !== "All").map((city) => (
                    <option value={city} key={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  value={filters.niche || "All"}
                  onChange={(e) => handleFilterChange("niche", e.target.value)}
                  className="mobile-filter-select"
                >
                  <option value="All">All Job Types</option>
                  {nichesArray.filter(n => n !== "All").map((niche) => (
                    <option value={niche} key={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              <div className="jobs-grid">
                {jobs && jobs.length > 0 ? (
                  jobs.map((job) => (
                    <div className="job-card" key={job._id}>
                      {job.hiringMultipleCandidates === "Yes" ? (
                        <span className="hiring-badge multiple">Multiple Openings</span>
                      ) : (
                        <span className="hiring-badge">Hiring</span>
                      )}
                      <h3 className="job-title">{job.title}</h3>
                      <p className="company-name">{job.companyName}</p>
                      <div className="job-details">
                        <p className="job-location">
                          <span className="detail-icon">📍</span> {job.location}
                        </p>
                        <p className="job-salary">
                          <span className="detail-icon">💰</span> ₹{job.salary}
                        </p>
                        <p className="job-posted">
                          <span className="detail-icon">📅</span> Posted: {new Date(job.jobPostedOn).toLocaleDateString()}
                        </p>
                      </div>
                      <Link
                        to={`/post/application/${job._id}`}
                        className="apply-button"
                      >
                        Apply Now
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="no-jobs-found">
                    <img
                      src="/notfound.png"
                      alt="No jobs found"
                      className="no-jobs-image"
                    />
                    <h3>No jobs found</h3>
                    <p>Try adjusting your search or filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;













// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { toast } from "react-toastify";
// // import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
// // import Spinner from "../components/Spinner";
// // import { FaSearch } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Jobs = () => {
// //   const [city, setCity] = useState("");
// //   const [selectedCity, setSelectedCity] = useState("");
// //   const [niche, setNiche] = useState("");
// //   const [selectedNiche, setSelectedNiche] = useState("");
// //   const [searchKeyword, setSearchKeyword] = useState("");

// //   const { jobs, loading, error } = useSelector((state) => state.jobs);

// //   const handleCityChange = (city) => {
// //     setCity(city);
// //     setSelectedCity(city);
// //   };
// //   const handleNicheChange = (niche) => {
// //     setNiche(niche);
// //     setSelectedNiche(niche);
// //   };

// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearAllJobErrors());
// //     }
// //     dispatch(fetchJobs(city, niche, searchKeyword));
// //   }, [dispatch, error, city, niche]);

// //   const handleSearch = () => {
// //     dispatch(fetchJobs(city, niche, searchKeyword));
// //   };

// //   const cities = [
// //     "All",
// //     "Bangalore",
// //     "Hyderabad",
// //     "Chennai",
// //     "Mumbai",
// //     "Pune",
// //     "Delhi",
// //     "Kolkata",
// //     "Noida",
// //     "Gurgaon",
// //     "Gurugram",
// //     "Ahmedabad",
// //     "Vizeg",
// //     "Lucknow",
// //     "Bhopal",
// //     "Jaipur",
// //     "Indore",
// //     "Kanpur",
// //     "Nagpur",
// //     "Patna",
// //     "Vadodara",
// //   ];

// //   const nichesArray = [
// //     "All",
// //     "Software Development",
// //     "Web Development",
// //     "Cybersecurity",
// //     "Data Science",
// //     "Artificial Intelligence",
// //     "Cloud Computing",
// //     "DevOps",
// //     "Mobile App Development",
// //     "Blockchain",
// //     "Database Administration",
// //     "Quantitative Trader",
// //     "UI/UX Design",
// //     "Game Development",
// //     "IoT (Internet of Things)",
// //     "Big Data",
// //     "Machine Learning",
// //     "IT Project Management",
// //     "IT Support and Helpdesk",
// //     "Systems Administration",
// //     "IT Consulting",
// //   ];

// //   return (
// //     <>
// //       {loading ? (
// //         <Spinner />
// //       ) : (
// //         <section className="jobs">
// //           <div className="search-tab-wrapper">
// //             <input
// //               type="text"
// //               value={searchKeyword}
// //               onChange={(e) => setSearchKeyword(e.target.value)}
// //             />
// //             <button onClick={handleSearch}>Find Job</button>
// //             <FaSearch />
// //           </div>
// //           <div className="wrapper">
// //             <div className="filter-bar">
// //               <div className="cities">
// //                 <h2>Filter Job By City</h2>
// //                 {cities.map((city, index) => (
// //                   <div key={index}>
// //                     <input
// //                       type="radio"
// //                       id={city}
// //                       name="city"
// //                       value={city}
// //                       checked={selectedCity === city}
// //                       onChange={() => handleCityChange(city)}
// //                     />
// //                     <label htmlFor={city}>{city}</label>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="cities">
// //                 <h2>Filter Job By Niche</h2>
// //                 {nichesArray.map((niche, index) => (
// //                   <div key={index}>
// //                     <input
// //                       type="radio"
// //                       id={niche}
// //                       name="niche"
// //                       value={niche}
// //                       checked={selectedNiche === niche}
// //                       onChange={() => handleNicheChange(niche)}
// //                     />
// //                     <label htmlFor={niche}>{niche}</label>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="container">
// //               <div className="mobile-filter">
// //                 <select value={city} onChange={(e) => setCity(e.target.value)}>
// //                   <option value="">Filter By City</option>
// //                   {cities.map((city, index) => (
// //                     <option value={city} key={index}>
// //                       {city}
// //                     </option>
// //                   ))}
// //                 </select>
// //                 <select
// //                   value={niche}
// //                   onChange={(e) => setNiche(e.target.value)}
// //                 >
// //                   <option value="">Filter By Niche</option>
// //                   {nichesArray.map((niche, index) => (
// //                     <option value={niche} key={index}>
// //                       {niche}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="jobs_container">
// //                 {jobs && jobs.length > 0 ? (
// //                   jobs.map((element) => {
// //                     return (
// //                       <div className="card" key={element._id}>
// //                         {element.hiringMultipleCandidates === "Yes" ? (
// //                           <p className="hiring-multiple">
// //                             Hiring Multiple Candidates
// //                           </p>
// //                         ) : (
// //                           <p className="hiring">Hiring</p>
// //                         )}
// //                         <p className="title">{element.title}</p>
// //                         <p className="company">{element.companyName}</p>
// //                         <p className="location">{element.location}</p>
// //                         <p className="salary">
// //                           <span>Salary:</span> Rs. {element.salary}
// //                         </p>
// //                         <p className="posted">
// //                           <span>Posted On:</span>{" "}
// //                           {element.jobPostedOn.substring(0, 10)}
// //                         </p>
// //                         <div className="btn-wrapper">
// //                           <Link
// //                             className="btn"
// //                             to={`/post/application/${element._id}`}
// //                           >
// //                             Apply Now
// //                           </Link>
// //                         </div>
// //                       </div>
// //                     );
// //                   })
// //                 ) : (
// //                   <img 
// //                     src="./notfound.png" 
// //                     alt="job-not-found" 
// //                     style={{width: "100%"}}
// //                     key="not-found-image"
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       )}
// //     </>
// //   );
// // };

// // export default Jobs;