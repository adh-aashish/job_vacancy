import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { applyJob } from "../../Actions/job";

const ApplyForm = ({ jobId, applyJob }) => {
  const [resume, setResume] = useState("");
  return (
    <Fragment>
      <div className="post-form">
        <div className="post bg-white p-1 my-1">
          <h3 className="text-primary">Add your resume and Apply</h3>
          <form
            className="form my-1"
            onSubmit={(e) => {
              e.preventDefault();
              applyJob(jobId, { resume });
              setResume("");
            }}
          >
            <input
              type="text"
              name="resume"
              placeholder="Add your resume link"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              required
            />
            <input type="submit" className="btn btn-primary" value="Apply" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

ApplyForm.propTypes = {
  applyJob: PropTypes.func.isRequired,
};

export default connect(null, { applyJob })(ApplyForm);
