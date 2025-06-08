import React, { useRef, useState, useEffect } from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    icon: <LuUserPlus />,
    title: "Create an Account",
    desc: "Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs. Customize your profile to highlight your skills or requirements.",
  },
  {
    icon: <VscTasklist />,
    title: "Post or Browse Jobs",
    desc: "Employers can post detailed job descriptions, and job seekers can browse a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences.",
  },
  {
    icon: <BiSolidLike />,
    title: "Hire or Get Hired",
    desc: "Employers can shortlist candidates and extend job offers. Job seekers can review job offers and accept positions that align with their career goals.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer at TechCorp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Landing my dream job was effortless with this platform. The intuitive interface and personalized job matches made my search productive and stress-free."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer at InnovateCo",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Within two weeks of creating my profile, I had multiple interview requests. The quality of opportunities surpassed all other job boards I've used."
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Marketing Manager at BrandVision",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "As someone transitioning careers, the platform's resources and matching algorithm helped me find positions that valued my transferable skills."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "HR Director at FutureTech",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "We've hired our top performers through this platform. The candidate quality and screening tools save us countless hours in the hiring process."
  }
];

const TimelineItem = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px 0px",
    amount: 0.3,
    once: true,
  });

  return (
    <div ref={ref} className="timeline-item">
      <motion.div
        className="timeline-motion"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <div className="timeline-icon-wrapper">{step.icon}</div>
        <div className="timeline-content">
          <h4>{step.title}</h4>
          <p>{step.desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialRef = useRef(null);
  const isInView = useInView(testimonialRef, { once: true });

  useEffect(() => {
    let interval;
    if (isAutoPlaying && isInView) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="testimonial-section" ref={testimonialRef}>
      <h3 className="testimonial-heading">Success Stories</h3>
      <div className="testimonial-container">
        {isInView && (
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            key={currentIndex}
          >
            <div className="testimonial-image-container">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-content">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
              <div className="testimonial-author">
                <h4>{testimonials[currentIndex].name}</h4>
                <p>{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <button className="nav-button prev" onClick={prevTestimonial}>
              <FiChevronLeft />
            </button>
            <button className="nav-button next" onClick={nextTestimonial}>
              <FiChevronRight />
            </button>
          </motion.div>
        )}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="how-it-works-wrapper">
      <section className="timeline-section" ref={scrollRef}>
        <h3 className="timeline-heading">How It All Works</h3>
        <div className="timeline">
          <motion.div 
            className="timeline-line" 
            style={{ height: timelineHeight }}
            initial={{ height: 0 }}
          />
          {steps.map((step, i) => (
            <TimelineItem key={i} step={step} index={i} />
          ))}
        </div>
      </section>
      <TestimonialSlider />
    </div>
  );
};

export default HowItWorks;