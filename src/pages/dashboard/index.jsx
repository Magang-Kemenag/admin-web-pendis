import HorizontalBarChart from "./components/horizontalbarchart";
import nookies from "nookies";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  console.log(cookies);
  return {
    props: {},
  };
}

export default function Page() {
  return (
    <main className="p-12 flex flex-col gap-8">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 flex flex-col border rounded-lg p-4 bg-white shadow-sm items-end">
          <div className="flex flex-col">
            <div className="font-bold text-lg">Welcome, Lustiyana</div>
            <div>Direktorat Jenderal Pendidikan Islam Kementrian Agama</div>
          </div>
          <button className="btn btn-primary w-32">Lihat Profil</button>
        </div>
        <div className="col-span-3 border rounded-lg shadow-sm bg-white p-4">
          <div className="font-bold text-lg">Statistik</div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div>
                <img src="/assets/icon-user.png" alt="" />
              </div>
              <div>
                <div>2000</div>
                <div>Views</div>
              </div>
            </div>
            <div className="flex">
              <div>
                <img src="/assets/icon-watch.png" alt="" />
              </div>
              <div>
                <div>2000</div>
                <div>Postingan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalBarChart />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">Terbaru</div>
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>JUDUL</th>
                <th>TERBIT</th>
                <th>AUTHOR</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td></td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td></td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
