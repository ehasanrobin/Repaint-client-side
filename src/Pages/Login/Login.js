import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useToken from "../../hooks/useToken";
import logo from "../../images/logo.png";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, g_user] = useSignInWithGoogle(auth);
  const [signInWithFacebook, f_user] = useSignInWithFacebook(auth);
  const [signInWithGithub, git_user] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);
  const { token } = useToken(user);

  const location = useLocation();
  const from = location.state || "/";

  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className=" grid grid-cols-1  rounded-md mx-auto bg-cream min-h-screen  p-12">
      <form
        action=""
        onSubmit={handleLogin}
        className="grid grid-cols-1  justify-items-center"
      >
        <div className="login-logo ">
          <img src={logo} className="" alt="logo" />
        </div>
        <h2 className="text-3xl font-bold w-full max-w-md">Login form</h2>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            name="email"
            required
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            name="password"
            required
            className="input input-bordered w-full "
          />
          <label className="label ">
            <Link className="label-text-alt max-w-xs">
              Forgot Your password?
            </Link>
            <Link to="/signUp" className="label-text-alt">
              don't have an Account?
            </Link>
          </label>
          {error && <p> username or password is incorrent</p>}
        </div>
        <div className="form-control w-full max-w-md ">
          <input
            type="submit"
            value="Login"
            className="input bg-orange input-bordered w-full max-w-md"
          />
        </div>
      </form>
      <div className=" login-divider">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid card bg-base-300 rounded-box place-items-center"></div>
          <div className="divider">OR</div>
          <div className="grid  card bg-base-300 rounded-box place-items-center"></div>
        </div>
      </div>
      <div className="login-social max-w-lg mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="btn mx-2 rounded-full"
        >
          <i className="fa-brands fa-google"></i>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn mx-2 rounded-full"
        >
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn mx-2 rounded-full"
        >
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
