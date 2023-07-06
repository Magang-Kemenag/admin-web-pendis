import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  return (
    <div className="p-12 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="font-bold text-3xl">Tambah Author</div>
        <Breadcrumb />
      </div>
      <div>
        <form action="" className="flex flex-col gap-4 bg-white rounded-xl p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="name"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Deskripsi"
                name="description"
                className="input input-bordered"
              />
              <div className="flex gap-4">
                <div className="form-control">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Editor</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Penulis</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Kontributor</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="label-text">Fotografer</span>
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="blocked"
                  className="radio radio-primary"
                />
                <label htmlFor="">Aktif</label>
                <input
                  type="radio"
                  name="blocked"
                  className="radio radio-primary"
                />
                <label htmlFor="">Ditangguhkan</label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-xl">Foto Profil</div>
              <input type="file" name="profile" />
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
