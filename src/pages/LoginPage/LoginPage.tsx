import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Shared/Input/Input";
import axios from "axios";
import routes from "../../api/api";
// import { useSignupMutation } from "../../api/apiSlice.js";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function submitHandler(event: any) {
    event.preventDefault();
    if (userName.length == 0) {
      setErrorMsg("Please Enter Valid Username.");
      setError(true);
    } else if (password.length == 0) {
      setErrorMsg("Please Enter Valid Password and Confirm Password.");
      setError(true);
    } else {
      const data = {};
      const headers = {
        username: userName,
        password: password,
      };
      axios
        .post(routes.login, data, {
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
          <div className="row d-flex justify-content-center h-100">
            <div className="col-6">
              <div
                className=" card text-black"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-12 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={submitHandler}>
                        <Input
                          name="Username"
                          col="col-12"
                          type="text"
                          onInput={(e: any) => setUserName(e.target.value)}
                        />
                        <Input
                          name="Password"
                          col="col-12"
                          type="password"
                          onInput={(e: any) => setPassword(e.target.value)}
                        />

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
                            Login
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

export default LoginPage;
