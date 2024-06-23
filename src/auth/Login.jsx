import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // email login

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        toast("You've successfully logged in");
      })
      .catch((error) => {
        console.log(error.message);
        toast("Your email or password is incorrect");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        toast("You've successfully logged in");
      })
      .catch((error) => {
        toast("Your email or password is incorrect");
        console.log(error.message);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        toast("You've successfully logged in");
      })
      .catch((error) => {
        toast("Your email or password is incorrect");
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center my-12 mb-[93px]">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              autoComplete="username"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p href="#" className="label-text-alt">
                If you do not have an account,{" "}
                <NavLink to={"/register"}>
                  <span className=" link link-hover">Register here</span>
                </NavLink>
              </p>
            </label>
          </div>
          <div className="flex items-center justify-center space-x-8 cursor-pointer">
            <div className="text-4xl" onClick={handleGoogleSignIn}>
              <FaGoogle />
            </div>
            <div className="text-4xl" onClick={handleGitHubSignIn}>
              <FaGithub />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
