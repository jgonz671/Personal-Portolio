import React, { useEffect, useState }  from 'react';
import '../styles/History.css'; 


function History() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const histories = [
    {
      title: "Computer Science Startup Bootcamp, Tokyo",
      description: "Participated in an immersive study abroad program in Tokyo, focused on bridging web development and entrepreneurship in computing. The program equipped me with comprehensive web development skills, including the use of modern tools and frameworks. Concurrently, I gained hands-on experience in technology entrepreneurship, covering ideation, market validation, and MVP development.",
      dates: ["Aug 2023", "Sep 2023"],
    },
    {
      title: "Subsitute Teacher - VVUSD",
      description: "Licensed to instruct classrooms K-12 including special education. Specialized to instruct computer science and math related courses in upper grades. ",
      dates: ["Sep 2023", "Present"],
    },
    {
      title: "Online Grocery Pickup Associate - Walmart",
      description: "Responsible for timely orders and deliveries to customers through effective teamwork. Assisted customers with knowledgeable support throughout every part of the store. Maintained track of various orders and products to prevent loss of cash assets. Enlisted a large mobile network used to track inventory, assist customers in real-time, and effectively complete orders. Answered phone calls daily concerning customer complaints and questions; aided in customer service and communication skills",
      dates: ["June 2022", "Nov 2022"],
    },
    {
      title: "Fullfillment Center Associate - Amazon",
      description: "Rigorous work environment fulfilling daily rates and quotas. High bar for customer service; responsible for customer satisfaction in the delivery of packages. Learned to effectively communicate with hundreds of other associates to maximize product efficiency. Familiarized with multiple mechanical objects. Practiced safety procedures around potentially hazardous equipment while handling product.",
      dates: ["June 2021", "Oct 2022"],
    },
  ];

  return (
    <div className="history-container">
      {histories.map((history, index) => (
        <div key={index} className={`history-card ${isAnimated ? 'run-animation' : ''}`}>
          <h2>{history.title}</h2>
          <p>{history.description}</p>
          <div className="history-dates">
          <span className="date">{history.dates.join(' - ')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
