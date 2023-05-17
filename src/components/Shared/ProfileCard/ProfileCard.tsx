import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import axios from "axios";
import routes from "../../../api/api";
import { useEffect, useState } from "react";

import "./ProfileCard.style.css";

import DummyData from "../../../../src/DummyData/dummyProfile.json";
import Iprofile from "../../../models/Iprofile";

function ProfileCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({} as Iprofile);
  const data = {};
  const headers = {
    id: localStorage.getItem("user_id"),
  };
  const getUser = () => {
    axios
      .get(routes.user, {
        data: data,
        headers: headers,
      })
      .then((response) => {
        setIsLoading(false);
        setIsError(false);
        setUser(response.data.result[0]);
        console.log(user);
      })
      .catch((e) => {
        console.log("e", e);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getUser();
  }, [setIsLoading, setUser]);

  if (isError) {
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
            <h5 className="card-title">Error Name</h5>
            <p className="card-text">Error Overview</p>
          </div>
          <div className="card-body info-border">
            <h5 className="card-title">Following</h5>
            <p className="card-text">0</p>
          </div>
          <div className="card-body info-border">
            <h5 className="card-title">Followers</h5>
            <p className="card-text">0</p>
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
          <h5 className="card-title">{user.firstName}</h5>
          <p className="card-text">
            {user.overview === null ? "" : user.overview}
          </p>
        </div>
        <div className="card-body info-border">
          <h5 className="card-title">Following</h5>
          <p className="card-text">
            {user.following === null ? 0 : user.following}
          </p>
        </div>
        <div className="card-body info-border">
          <h5 className="card-title">Followers</h5>
          <p className="card-text">
            {user.followers === null ? 0 : user.followers}
          </p>
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
