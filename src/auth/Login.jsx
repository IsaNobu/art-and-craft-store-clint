import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // email login

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        toast("You've successfully logged in");
      })
      .catch((error) => {
        console.log(error.message);
        toast("Your email or password is incorrect");
      });
  };
  return (
    <div className="flex justify-center my-12">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt">
                If you do not have an account,{" "}
                <NavLink to={"/register"}>
                  <span className=" link link-hover">Register here</span>
                </NavLink>
              </a>
            </label>
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
