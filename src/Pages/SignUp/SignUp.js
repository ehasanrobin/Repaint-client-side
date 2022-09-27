import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import useToken from "../../hooks/useToken";
import logo from "../../images/logo.png";
import Loading from "../Shared/Loading";
const SignUp = () => {
  const [signInWithGoogle, g_user] = useSignInWithGoogle(auth);
  const [signInWithFacebook, f_user] = useSignInWithFacebook(auth);
  const [signInWithGithub, git_user] = useSignInWithGithub(auth);
  const [user, loading, error] = useAuthState(auth);
  const [createUserWithEmailAndPassword, e_user] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const { token } = useToken(user);
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  return (
    <div className=" grid grid-cols-1  rounded-md mx-auto bg-cream min-h-screen  p-12">
      <form
        action=""
        onSubmit={handleSignUp}
        className="grid grid-cols-1  justify-items-center"
      >
        <div className="login-logo ">
          <img src={logo} className="" alt="logo" />
        </div>
        <h2 className="text-3xl font-bold w-full max-w-md">
          Registration form
        </h2>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            required
            placeholder="Type here"
            name="name"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            placeholder="Type here"
            name="email"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            placeholder="Type here"
            name="password"
            className="input input-bordered w-full "
          />
          <label className="label ">
            <Link className="label-text-alt max-w-xs"></Link>
            <Link to="/login" className="label-text-alt">
              Already have Account?
            </Link>
          </label>
        </div>
        <div className="form-control w-full max-w-md ">
          <input
            type="submit"
            value="Registration"
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

export default SignUp;
