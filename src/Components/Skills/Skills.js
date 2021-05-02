import React from "react";

const Skills = () => {
  return (
    <div className="w-75">
      <div>
        <h6 className="text-white mx-4">REACT</h6>
        <div class="progress m-3">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div>
        <h6 className="text-white mx-4">JAVASCRIPT</h6>
        <div class="progress m-3">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div>
        <h6 className="text-white mx-4">HTML</h6>
        <div class="progress m-3">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div>
        <h6 className="text-white mx-4">CSS</h6>
        <div class="progress m-3">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "95%" }}
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div>
        <h6 className="text-white mx-4">BOOTSTRAP</h6>
        <div class="progress m-3">
          <div
            class="progress-bar progress-bar-striped bg-warning"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
