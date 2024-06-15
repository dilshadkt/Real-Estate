import React, { useState } from "react";
import DOMPurify from "dompurify";
import "./readmore.scss";
const Readmore = ({ text, maxCount = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const content = isExpanded ? text : text.slice(0, maxCount);

  //   Toggel the readmore
  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div
        className="bottom"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      ></div>
      {text.length > maxCount && (
        <span className="readmore" onClick={toggleReadMore}>
          {isExpanded ? "Read Less" : "... Read More"}
        </span>
      )}
    </div>
  );
};

export default Readmore;
