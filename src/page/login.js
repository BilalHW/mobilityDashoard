import { useRef, useState, useEffect } from "react";
import { Button } from "../components/Button";
import { signin} from "../api/user.api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin({
        username: user,
        password: pwd,
      });
      if (localStorage.getItem("token") !== null) {
        navigate("/dashboard");
        setPwd = "";
        setUser = "";
      }

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        // console.log(err.response.JSON);
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }

  };

  return (
    <>
      <div class="h-screen w-full bg-purple flex flex-col justify-center items-center ">
        <form>
          <div className="bg-white px-5 py-10 rounded-xl shadow-2xl max-w-md items-center justify-center">
            <img
              src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/mobility-logo.png?VersionId=te3t_AVqY_pe31fajvMLlgmcxv_my4jY"
              alt="Mobility"
              width={"35%"}
              height={"35%"}
              className="items-center align-middle ml-5 px-10"
            />
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-bold text-black">
                Login to your account
              </h1>
              <div>
                <label for="username" className="block mb-1 text-gray-600 ">
                  UserName
                </label>
                <input
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  name="username"
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label for="email" className="block mb-1 text-gray-600 ">
                  Password
                </label>
                <input
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  name="password"
                  type="password"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <div className=" w-full py-1 mt-4 bg-purple rounded-lg text-white items-center">
              <Button
                label="Login"
                btnStyle={" text-white text-xl items-center"}
                onClick={(e) => handleSubmit(e)}
              />
            </div>
            <div className="flex flex-col justify-center mt-10">
              <div>
                <p>
                  New to Mobility?{" "}
                  <span className="hover:text-purple hove:text-purple px-2 ">
                    <a href="/#" className>
                      Sign Up
                    </a>
                  </span>
                </p>
              </div>
              <div className=" text-rose-900">
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
