import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./ProfilesTab.style.css";

import Iprofile from "../../../models/Iprofile";

function ProfilesTab({
  name,
  profile,
  type,
}: {
  name: string;
  profile: Iprofile[];
  type: string;
}) {
  let j = 0;
  return (
    <div>
      <div className="list-group jobs-card m-3">
        <a
          href="#"
          className="list-group-item list-group-item-action text-light bg-danger"
          aria-current="true"
        >
          <b>{name}</b>
        </a>
        {profile.map((Item: Iprofile) => {
          if (type === "liked") {
            j++;
            if (Item.followers >= 1000 && j <= 10) {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action job-text d-flex"
                >
                  <div>
                    <img
                      src={Item.profilePic}
                      className="suggestions-pfp rounded-circle me-2"
                      alt="pfp-picture"
                    />
                  </div>
                  <div className="me-5">
                    <b>{Item.firstName}</b>
                    <p>{Item.job}</p>
                  </div>
                </a>
              );
            }
          } else {
            return (
              <a
                href="#"
                className="list-group-item list-group-item-action job-text d-flex"
              >
                <div>
                  <img
                    src={Item.profilePic}
                    className="suggestions-pfp rounded-circle me-2"
                    alt="pfp-picture"
                  />
                </div>
                <div className="me-5">
                  <b>{Item.firstName}</b>
                  <p>{Item.job}</p>
                </div>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProfilesTab;
