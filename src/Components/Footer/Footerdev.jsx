import "./Footerdev.css";
import React, { useEffect } from 'react';

function Footerdev() {
  useEffect(() => {
    const cursor = document.querySelector(".follow-img");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = `${x+50}px`;
      cursor.style.top = `${y-50}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="footerdev">
      <li className="index-item">Web design et développement par   <a href="#">
      <span>moi-même ♡</span>
        <img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" />
      </a></li>
    
    </div>
  );
}

export default Footerdev;
