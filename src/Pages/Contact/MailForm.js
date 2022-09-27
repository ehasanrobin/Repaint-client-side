import React from "react";

const MailForm = () => {
  return (
    <div className="container px-5 py-28 bg-cream">
      <div className="text-center max-w-6xl mx-auto">
        <sub className="text-3xl text-orange">Contact</sub>
        <h1 className="text-6xl font-bold px-2">Any Questions? Let's Talk</h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla auctor elit, et mollis massa ullamcorper in. Vestibulum
          egestas, neque non accumsan mollis, dui lacus dictum nunc, a
          scelerisque nibh magna auctor tellus.
        </p>
      </div>
      <form action="" className="grid gap-4">
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full text-area-w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <textarea
              className="textarea textarea-bordered text-area-w-full "
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        <div className="form-control grid items-center text-center">
          <input
            type="submit"
            value="Send"
            className="input max-w-md bg-orange "
          />
        </div>
      </form>
    </div>
  );
};

export default MailForm;
