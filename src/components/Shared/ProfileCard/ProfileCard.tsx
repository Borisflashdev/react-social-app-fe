import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./ProfileCard.style.css";

import DummyData from "../../../../src/DummyData/dummyProfile.json";

function ProfileCard() {
  return (
    <div>
      <div className="card pfp-card m-3">
        <div className="d-flex justify-content-center pfp-card-bg rounded-1">
          <img
            src={DummyData[0].profilePic}
            className="card-img-top rounded-circle pfp p-2"
            alt="pfp-picture"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{DummyData[0].name}</h5>
          <p className="card-text">{DummyData[0].bio}</p>
        </div>
        <div className="card-body info-border">
          <h5 className="card-title">Following</h5>
          <p className="card-text">{DummyData[0].following}</p>
        </div>
        <div className="card-body info-border">
          <h5 className="card-title">Followers</h5>
          <p className="card-text">{DummyData[0].followers}</p>
        </div>
        <div className="card-body info-border">
          <a href="#" className="btn btn-danger">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
