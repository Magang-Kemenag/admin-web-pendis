import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Link from "next/link";
export default function Page() {
  return (
    <div className="p-12 flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="font-bold text-3xl">Admin</div>
        <Breadcrumb />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link href="/admin/add">
            <button className="btn btn-primary">Tambah</button>
          </Link>
          <button className="btn btn-accent">Aktifkan</button>
          <button className="btn btn-warning">Tangguhkan</button>
          <button className="btn btn-error">Hapus</button>
          <button className="btn">Reset</button>
        </div>
        <form action="" className="flex gap-2">
          <select className="select select-bordered">
            <option disabled selected>
              Semua Kategori
            </option>
            <option>Diaktifkan</option>
            <option>Ditangguhkan</option>
            <option>Dihapus</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Nama</th>
                <th>Email</th>
                <th>Login Terakhir</th>
                <th>Peran</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img
                          src="/assets/users.svg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>12/11/2023</td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    Kontributor
                  </span>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">Aktif</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                </th>
              </tr>
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Nama</th>
                <th>Email</th>
                <th>Login Terakhir</th>
                <th>Peran</th>
                <th>Status</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
