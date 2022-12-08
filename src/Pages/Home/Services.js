import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://repaint-server-side1.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="bg-cream py-12">
      <div className="text-center max-w-6xl mx-auto">
        <sub className="capitalize text-orange text-2xl">our tools</sub>
        <h2 className="text-5xl font-bold my-3">
          Experience Makes Us Confident
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla auctor elit, et mollis massa ullamcorper in. Vestibulum
          egestas, neque non accumsan mollis, dui lacus dictum nunc, a
          scelerisque nibh magna auctor tellus.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-12">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
