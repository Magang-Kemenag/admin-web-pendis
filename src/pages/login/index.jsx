import axios from "axios";
import { useState } from "react";
import nookies, { parseCookies, setCookie } from "nookies";
import Router from "next/router";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  if (cookies.token) {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  console.log(cookies);
  return {
    props: {},
  };
}

export default function Page() {
  const [modifiedData, setModifiedData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookies = parseCookies();

    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: modifiedData.identifier,
        password: modifiedData.password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        if (response.data.jwt) {
          setCookie(null, "token", response.data.jwt);
          Router.replace("/dashboard");
        }
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-4 items-center p-12">
      <div>
        <img src="/assets/login.svg" alt="" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <img src="/assets/pendis-kemenag.png" className="w-32" alt="" />
          <div className="font-bold">
            <div>KEMENTRIAN AGAMA</div>
            <div>REPUBLIK INDONESIA</div>
          </div>
        </div>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="identifier"
            value={modifiedData.identifier}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={modifiedData.password}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <div className="form-control">
            <label className="cursor-pointer flex gap-4">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          <button className="btn btn-primary">LOGIN</button>
          <button className="btn btn-link">support@kemenag.go.id</button>
        </form>
      </div>
    </div>
  );
}
