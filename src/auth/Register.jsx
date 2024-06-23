import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      toast("Password must contain at least one uppercase letter.");
      return;
    } else if (!hasLowercase) {
      toast("Password must contain at least one lowercase letter.");
      return;
    } else if (!isLongEnough) {
      toast("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast("You've Successfully registered");
        navigate("/");
      })
      .catch((error) => {
        toast("Please fill up your form carefully");
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center my-12">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              autoComplete="username"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Upload your Photo</span>
            </label>
            <input
              type="url"
              autoComplete="URL"
              placeholder="Photo URL"
              name="url"
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
            <label className="label mt-6">
              <p href="#" className="label-text-alt text-base">
                If you already have an account,{" "}
                <NavLink to={"/login"}>
                  <span className=" link link-hover">Login here</span>
                </NavLink>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
