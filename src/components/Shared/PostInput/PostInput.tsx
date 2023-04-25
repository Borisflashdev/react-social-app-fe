import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./PostInput.style.css";

import DummyData from "../../../DummyData/dummyProfile.json";

function PostInput() {
  return (
    <div>
      <div className="card post-border m-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <img
              src={DummyData[0].profilePic}
              className="pfp-post rounded-circle"
              alt="pfp-picture"
            />
          </div>
          <div className="pt-2">
            <button type="button" className="btn btn-outline-danger me-2">
              Post a Project
            </button>
            <button type="button" className="btn btn-danger">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;
