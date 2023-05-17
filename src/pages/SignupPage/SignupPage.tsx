import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Shared/Input/Input";
import axios from "axios";
import routes from "../../api/api";
// import { useSignupMutation } from "../../api/apiSlice.js";

function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [mobile, setMobile] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // const [signup] = useSignupMutation();

  // const [ value, setValue ] = useState(false);

  function submitHandler(event: any) {
    event.preventDefault();
    if (firstName.length == 0) {
      setErrorMsg("Please Enter First Name.");
      setError(true);
    } else if (lastName.length == 0) {
      setErrorMsg("Please Enter Last Name.");
      setError(true);
    } else if (job.length == 0) {
      setErrorMsg("Please Enter Job.");
      setError(true);
    } else if (mobile.length == 0) {
      setErrorMsg("Please Enter Mobile.");
      setError(true);
    } else if (userName.length == 0) {
      setErrorMsg("Please Enter Valid Username (min. 8 characters).");
      setError(true);
    } else if (email.length == 0) {
      setErrorMsg("Please Enter Email.");
      setError(true);
    } else if (password.length == 0 || confirmPassword.length == 0) {
      setErrorMsg("Please Enter Valid Password and Confirm Password.");
      setError(true);
    } else if (password !== confirmPassword) {
      setErrorMsg("Password and Confirm Password must be same.");
      setError(true);
    } else if (terms === false) {
      setErrorMsg("Please agree to our Terms of service.");
      setError(true);
    } else {
      const data = {};
      const headers = {
        username: userName,
        password: password,
        first: firstName,
        last: lastName,
        emial: email,
        mobile: mobile,
        job: job,
      };
      axios
        .post(routes.signup, data, {
          headers: headers,
        })
        .then((response) => {
          localStorage.setItem("user_id", response.data.result[0].id);
          navigate("/");
        })
        .catch((e) => {
          console.log(e);
          if (!e.response.data.msg.sqlMessage) {
            setErrorMsg(`${e.response.data.msg}`);
            setError(true);
          } else {
            setErrorMsg(`Something went wrong, please try again later.`);
            setError(true);
          }
        });
    }
  }

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-6">
              <div
                className=" card text-black"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-12 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={submitHandler}>
                        <div className="row">
                          <Input
                            name="First Name"
                            col="col-6"
                            type="text"
                            onInput={(e: any) => setFirstName(e.target.value)}
                          />
                          <Input
                            name="Last Name"
                            col="col-6"
                            type="text"
                            onInput={(e: any) => setLastName(e.target.value)}
                          />
                        </div>
                        <Input
                          name="Job"
                          col="col-12"
                          type="text"
                          onInput={(e: any) => setJob(e.target.value)}
                        />
                        <Input
                          name="Mobile"
                          col="col-12"
                          type="text"
                          onInput={(e: any) => setMobile(e.target.value)}
                        />
                        <Input
                          name="Username"
                          col="col-12"
                          type="text"
                          onInput={(e: any) => setUserName(e.target.value)}
                        />
                        <Input
                          name="Email"
                          col="col-12"
                          type="email"
                          onInput={(e: any) => setEmail(e.target.value)}
                        />
                        <div className="row">
                          <Input
                            name="Password"
                            col="col-6"
                            type="password"
                            onInput={(e: any) => setPassword(e.target.value)}
                          />
                          <Input
                            name="Confirm Password"
                            col="col-6"
                            type="password"
                            onInput={(e: any) =>
                              setConfirmPassword(e.target.value)
                            }
                          />
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="terms"
                            onChange={(e: any) => setTerms(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="terms">
                            I agree all statements in{" "}
                            <a href="#!" className="text-danger">
                              Terms of service
                            </a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mb-3 text-danger">
                          {error ? (
                            <p>
                              <b>{errorMsg}</b>
                            </p>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-danger btn-lg"
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
