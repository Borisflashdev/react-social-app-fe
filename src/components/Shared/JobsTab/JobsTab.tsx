import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./JobsTab.style.css";

import Ijob from "../../../models/Ijob";

function JobsTab({
  name,
  ad,
  type,
}: {
  name: string;
  ad: Ijob[];
  type: string;
}) {
  let j = -1;
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
        {ad.map((AdItem: Ijob) => {
          if (type === "liked") {
            j++;
            if (AdItem.likes >= 100 && j <= 10) {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action job-text d-flex"
                >
                  <div>
                    <b>{AdItem.name}</b>
                    <p>{AdItem.description}</p>
                  </div>
                  <div>
                    <b>${AdItem.salary}/hr</b>
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
                  <b>{AdItem.name}</b>
                  <p>{AdItem.description}</p>
                </div>
                <div>
                  <b>${AdItem.salary}/hr</b>
                </div>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}

export default JobsTab;
