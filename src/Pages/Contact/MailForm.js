import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";

const MailForm = () => {
  const handleMsg = async (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const msg = e.target.msg.value;
    const msgsend = {
      name: `${fname} ${lname}`,
      email: email,
      subject: subject,
      msg,
    };

    await axiosPrivate({
      method: "POST",
      url: `http://localhost:5000/msg`,
      data: msgsend,
    }).then((result) => {
      toast("Your msg has been send");
      e.reset();
    });
  };
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
      <form action="" onSubmit={handleMsg} className="grid gap-4">
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              name="fname"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              name="lname"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
          <div className="form-control w-full max-w-2xl">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Type here"
              className="input input-bordered w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="form-row sm:flex gap-3">
          <div className="form-control w-full text-area-w-full">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered text-area-w-full "
              name="msg"
              placeholder="Message"
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
