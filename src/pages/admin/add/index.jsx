import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [modifiedData, setModifiedData] = useState({
    username: "",
    email: "",
    name: "",
    place_of_birth: "",
    date_of_birth: "",
    blocked: false,
    password: "pendis2023",
    profile: "",
  });
  const [files, setFiles] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(modifiedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", files);
    axios
      .post("http://127.0.0.1:1337/api/upload", formData)
      .then((response) => {
        const imageId = response.data[0].id;
        setModifiedData((prev) => ({
          ...prev,
          profile: imageId,
        }));
      })
      .catch((error) => {
        console.log("salah");
      });

    axios
      .post("http://localhost:1337/api/auth/local/register", {
        email: modifiedData.email,
        username: modifiedData.username,
        password: modifiedData.password,
        name: modifiedData.name,
        place_of_birth: modifiedData.place_of_birth,
        date_of_birth: modifiedData.date_of_birth,
        profile: modifiedData.profile,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="p-12 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="font-bold text-3xl">Tambah Admin</div>
        <Breadcrumb />
      </div>
      <div>
        <form
          action=""
          className="flex flex-col gap-4 bg-white rounded-xl p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={modifiedData.username}
                onChange={handleChange}
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                value={modifiedData.email}
                onChange={handleChange}
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="name"
                value={modifiedData.name}
                onChange={handleChange}
                className="input input-bordered"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type here"
                  name="place_of_birth"
                  value={modifiedData.place_of_birth}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
                <input
                  className="border-2 rounded-lg"
                  type="date"
                  id="date"
                  name="date_of_birth"
                  value={modifiedData.date_of_birth}
                  onChange={handleChange}
                />
              </div>
              <select className="select select-bordered">
                <option>Pilih Peran</option>
                <option>Editor</option>
                <option>Kontributor</option>
                <option>Super Admin</option>
              </select>
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="blocked"
                  value={false}
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                <label htmlFor="">Aktif</label>
                <input
                  type="radio"
                  name="blocked"
                  value={true}
                  onChange={handleChange}
                  className="radio radio-primary"
                />
                <label htmlFor="">Ditangguhkan</label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-xl">Foto Profil</div>
              <input
                type="file"
                name="profile"
                onChange={(e) => setFiles(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary">
              Tambah
            </button>
            <button className="btn btn-active">Batal</button>
          </div>
        </form>
      </div>
    </div>
  );
}
