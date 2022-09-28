import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const userData = {
    email: user?.email,
    name: user?.displayName,
  };

  if (user) {
    fetch(`https://repain-server-side.herokuapp.com/users/${user?.email}`, {
      method: "PUT", // Method itself
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      body: JSON.stringify(userData), // We send data in JSON format
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("accessToken", data.token);
      });
  }
  return token;
};

export default useToken;
