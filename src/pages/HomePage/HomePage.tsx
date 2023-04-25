import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ProfileCard from "../../components/Shared/ProfileCard/ProfileCard";
import PostInput from "../../components/Shared/PostInput/PostInput";
import JobsTab from "../../components/Shared/JobsTab/JobsTab";
import SuggestionsTab from "../../components/Shared/SuggestionsTab/SuggestionsTab";

import DummyTopJobs from "../../DummyData/dummyJobs.json";
import DummyProfile from "../../DummyData/dummyProfile.json";

function HomePage() {
  return (
    <div>
      <center className="d-flex justify-content-center">
        <div>
          <ProfileCard />
          <SuggestionsTab name="Suggestions" profile={DummyProfile} />
        </div>
        <PostInput />
        <div>
          <JobsTab type="" name="Top Jobs" ad={DummyTopJobs} />
          <JobsTab
            type="liked"
            name="Most Viewed This Week"
            ad={DummyTopJobs}
          />
        </div>
      </center>
    </div>
  );
}

export default HomePage;
