import React from "react";
import "./Concern.css";
import { BsArrowRight } from "react-icons/bs";

const Concern = () => {
  return (
    <>
      <div className="concern">
        <ul>
          <li>
            {" "}
            <a>
              <BsArrowRight className="concernIcon" />
              Talukder Plastic Co. Ltd.
            </a>
          </li>

          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Foundry Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder uPVC Fittings
              Ind. Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Distribution Co.
              Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> Talukder Furniture Ltd.
            </a>
          </li>
          <li>
            <a>
              {" "}
              <BsArrowRight className="concernIcon" /> J & J Enterprise Ltd.
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Concern;
