<template>
  <div class="dashboard p-4">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Dashboard
          </a>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full flex justify-between items-center">
      <h1 class="text-2xl text-gray-900 dark:text-gray-200 font-medium">
        Dashboard
      </h1>
      <div
        class="cursor-pointer ml-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="updateAllData"
      >
        refresh
      </div>
    </div>
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <!-- <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          5,355
        </h2> -->
        <p class="text-gray-400 font-lexend font-normal">
          Peminjaman setiap bulan
        </p>
        <span class="float-right">
          <h2 class="text-gray-500 mt-2 flex">
            <span class="mr-2">
              {{
                seriesPeminjam[0].data[seriesPeminjam[0].data.length - 1] -
                seriesPeminjam[0].data[seriesPeminjam[0].data.length - 2]
              }}%
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="area"
            :options="optionsPeminjam"
            :series="seriesPeminjam"
          ></apexchart>
          <br />
          <hr />
        </div>
      </div>
      <!-- second -->
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <p class="text-gray-400 font-lexend font-normal">
          Pengunjung setiap bulan
        </p>
        <span class="float-right">
          <h2 class="text-gray-500">
            <span class="mr-2">
              {{
                seriesVisitor[0].data[seriesVisitor[0].data.length - 1] -
                seriesVisitor[0].data[seriesVisitor[0].data.length - 2]
              }}%
            </span>
          </h2>
        </span>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="line"
            :options="optionsVisitor"
            :series="seriesVisitor"
          ></apexchart>
          <br />
          <hr />
        </div>
      </div>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        total: {{ total_peminjam_jurusan }}
      </h2>
      <p class="text-gray-400 font-lexend font-normal">
        Peminjam Berdasarkan Jurusan
      </p>

      <div class="wrapper-chart mt-5">
        <apexchart
          width="100%"
          height="380"
          type="pie"
          :options="optionsDonut"
          :series="seriesDonut"
        ></apexchart>
        <div class="p-3"></div>
        <br />
        <hr />
      </div>
    </div>
    <div
      class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
    >
      <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
        Tabel Peminjaman
      </h2>

      <div class="wrapping-table mt-10">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 lg:overflow-auto overflow-x-scroll"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="uppercase px-6 py-3">ID Peminjaman</th>
              <th scope="col" class="uppercase px-6 py-3">ID Anggota</th>
              <th scope="col" class="uppercase px-6 py-3">Tanggal Pinjam</th>
              <th scope="col" class="uppercase px-6 py-3">Tanggal Kembali</th>
              <th scope="col" class="uppercase px-6 py-3">
                Tanggal Pengembalian
              </th>
              <th scope="col" class="uppercase px-6 py-3">Denda</th>
              <th scope="col" class="uppercase px-6 py-3">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
              v-for="items in table_peminjaman"
              :key="items.id_peminjaman"
            >
              <td class="px-6 py-4">
                {{ items.id_peminjaman }}
              </td>
              <td class="px-6 py-4">
                {{ items.id_anggota }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_pinjam }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_kembali }}
              </td>
              <td class="px-6 py-4">
                {{ items.tanggal_pengembalian }}
              </td>
              <td class="px-6 py-4">
                {{ items.denda }}
              </td>
              <td class="px-6 py-4 grid grid-rows-2">
                <span
                  class="mr-2 my-2 text-green-800 bg-green-300 px-3 py-1 rounded-md cursor-pointer"
                  @click="beforeUpdateData(items.id_peminjaman)"
                >
                  <!-- href="#updatesession" -->
                  <!-- v-scroll-to="{ element: '#updatesession', duration: 5000 }" -->
                  <!-- fetchPengunjung();
                    fetchPeminjamJurusan();
                    fetchPeminjamanBuku();
                    fetchTabelPeminjaman(); -->
                  Update
                </span>
                <span
                  class="text-purple-800 mr-2 my-2 bg-purple-300 px-3 py-1 rounded-md cursor-pointer"
                  @click="deleteTabelPeminjaman(items.id_peminjaman)"
                >
                  delete
                </span>
              </td>
            </tr>

            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
            >
              <td class="px-6 py-4">Total</td>
              <td class="px-6 py-4">{{ table_peminjaman.length }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- update data -->
    <form @submit.prevent="updateData" v-show="is_update_open">
      <div
        class="flex flex-wrap -mx-3 mb-6 mt-5 transition ease-in-out"
        id="updatesession"
      >
        <h2 class="text-3xl ml-3 text-gray-200">Update Table</h2>
        <h3 class="text-xl ml-3 text-gray-200">ID: {{ update_id }}</h3>
        <div class="w-full mt-2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Tanggal Kembali
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="example: 2022-01-03"
            v-model="update_data.tanggal_kembali"
            required
          />
        </div>
        <div class="w-full mt-2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Denda
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="example: 5000"
            v-model="update_data.denda"
            required
          />
        </div>
        <button
          type="submit"
          class="ml-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
          @click="is_update_open = false"
          class="ml-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
    <!-- insert data -->
    <form @submit.prevent="insertData">
      <div class="flex flex-wrap -mx-3 mb-6 mt-5">
        <h2 class="text-3xl ml-3 text-gray-200">Insert Table</h2>
        <div class="w-full mt-2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Tanggal Pinjam
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="example: 2022-01-03"
            v-model="insert_data.tanggal_pinjam"
            required
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Tanggal Pengembalian
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="example: 2022-01-03"
            v-model="insert_data.tanggal_pengembalian"
            required
          />
        </div>
        <div class="w-full mt-2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            ID Petugas
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="example: 9"
            v-model="insert_data.id_petugas"
            required
          />
        </div>
        <div class="w-full mt-2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            ID Anggota
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="example: 10"
            v-model="insert_data.id_anggota"
            required
          />
        </div>
        <div class="w-full mt-2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            ID buku
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="example: 11"
            v-model="insert_data.id_buku"
            required
          />
          <!-- <p class="mt-2 text-red-500 text-xs italic">
            Please fill out this field.
          </p> -->
        </div>
        <button
          type="submit"
          class="cursor-pointer ml-3 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
// import { response } from "express";
// import pg from "pg";

export default {
  name: "Dashboard",
  data() {
    return {
      // pengunjung_bulanan
      pengunjung_bulanan: {
        bulan: [],
        banyak: [],
      },
      table_peminjaman: [],
      // peminjam tiap jurusan
      total_peminjam_jurusan: 0,
      chart: {
        fontFamily: "lexend, sans-serif",
      },
      // insert
      insert_data: {
        tanggal_pinjam: "",
        tanggal_pengembalian: "",
        id_petugas: "",
        id_anggota: "",
        id_buku: "",
      },
      // Update
      update_id: "",
      update_data: {
        tanggal_kembali: "",
        denda: "",
      },
      is_update_open: false,
      // setup chart
      optionsVisitor: {
        chart: {
          id: "pengunjung",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: { show: false },
        xaxis: {
          categories: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 0,
        },
        colors: ["#fceae8"],

        fill: {
          type: "solid",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },

      seriesVisitor: [
        {
          name: "Visitor ",
          data: [30, 40, 45, 50, 91],
        },
      ],
      optionsPeminjam: {
        chart: {
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        legend: { show: false },
        xaxis: {
          categories: [
            "jan",
            "feb",
            "mar",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 0,
        },
        colors: ["#4f46e5"],

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
      },

      seriesPeminjam: [
        {
          name: "Peminjam",
          data: [],
        },
      ],

      optionsDonut: {
        chart: {
          type: "donut",
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "#78dee3",
          },
        },
        dataLabels: {
          enabled: false,
        },
        labels: [],
      },

      seriesDonut: [20, 15, 63, 83, 99],
    };
    // end chart data line
  },
  components: {
    Icon,
  },
  methods: {
    async fetchPengunjung() {
      let that = this;
      let tempData = [];
      let tempLabel = [];
      await fetch("http://localhost:3030/pengunjung", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          // console.log(typeof response);
          // console.log(typeof tempData);
          // console.log(tempData[0]);
          tempData.sort((a, b) => a.bulan - b.bulan);
          console.log("pengunjung sort =>", tempData);
          that.optionsVisitor.xaxis.categories = [];
          that.seriesVisitor[0].data = [];
          // console.log(
          //   that.optionsVisitor.xaxis.categories,
          //   " ==||== ",
          //   that.seriesVisitor[0].data
          // );
          tempData.forEach((data) => {
            // tempLabel.push(that.convertToMonth(parseInt(data.bulan)));
            that.seriesVisitor[0].data.push(parseInt(data.banyak));
            that.pengunjung_bulanan.bulan.push(
              that.convertToMonth(parseInt(data.bulan))
            );
            that.optionsVisitor = {
              xaxis: {
                categories: that.pengunjung_bulanan.bulan,
              },
            };
            that.pengunjung_bulanan.banyak.push(parseInt(data.banyak));
          });
        });
    },
    async fetchPeminjamanBuku() {
      let that = this;
      let tempData = [];
      let tempLabel = [];
      await fetch("http://localhost:3030/pinjam_buku", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          // console.log(typeof response);
          // console.log(typeof tempData);
          // console.log(tempData[0]);
          tempData.sort((a, b) => a.bulan - b.bulan);
          // console.log("sort peminjam buku=>", tempData);
          that.seriesPeminjam[0].data = [];
          tempData.forEach((data) => {
            if (parseInt(data.coalesce) != 0) {
              that.seriesPeminjam[0].data.push(parseInt(data.coalesce));
              tempLabel.push(this.convertToMonth(data.bulan));
            }
          });
          that.optionsPeminjam = {
            xaxis: {
              categories: tempLabel,
            },
          };
        });
    },
    async fetchPeminjamJurusan() {
      let that = this;
      let tempData = [];
      let buffer = [];
      await fetch("http://localhost:3030/peminjam", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          tempData = JSON.parse(response);
          // console.log(typeof response);
          // console.log("after sort jurusan=>", tempData);
          // console.log(tempData[0]);
          // console.log(tempData);
          // console.log(that.optionsDonut.labels, " ==||== ", that.seriesDonut);

          that.optionsDonut = {
            labels: [],
          };
          that.seriesDonut = [];
          console.log(that.optionsDonut.labels, " ==||== ", that.seriesDonut);
          that.total_peminjam_jurusan = 0;
          tempData.forEach((data) => {
            // tempData.push(data.jurusan);
            buffer.push(data.jurusan);
            that.total_peminjam_jurusan += parseInt(data.jumlah_peminjam);

            that.seriesDonut.push(parseInt(data.jumlah_peminjam));
          });
          that.optionsDonut = {
            labels: buffer,
          };
          console.log(that.optionsDonut.labels, " ", that.seriesDonut);
        });
    },
    async fetchTabelPeminjaman() {
      let that = this;
      let tempData = [];
      let buffer = [];
      await fetch("http://localhost:3030/tabel_peminjaman", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          // console.log("response=> ", response);
          tempData = JSON.parse(response);
          tempData.sort((a, b) => a.id_anggota - b.id_anggota);
          // console.log(typeof response);
          // console.log("after sort =>", tempData);
          that.table_peminjaman = [];
          that.table_peminjaman.push(...tempData);
          // console.log("sebelum short =>", that.table_peminjaman);
          that.table_peminjaman.sort(
            (a, b) => parseInt(a.id_anggota) > parseInt(b.id_anggota)
          );
          // console.log("sesudah sort =>", that.table_peminjaman);
        });
    },
    // logic
    convertToMonth(numbData) {
      let name = "";
      if (numbData == 1) {
        name = "jan";
      } else if (numbData == 2) {
        name = "feb";
      } else if (numbData == 3) {
        name = "mar";
      } else if (numbData == 4) {
        name = "apr";
      } else if (numbData == 5) {
        name = "may";
      } else if (numbData == 6) {
        name = "jun";
      } else if (numbData == 7) {
        name = "jul";
      } else if (numbData == 8) {
        name = "aug";
      } else if (numbData == 9) {
        name = "sep";
      } else if (numbData == 10) {
        name = "oct";
      } else if (numbData == 11) {
        name = "nov";
      } else {
        name = "dec";
      }
      return name;
    },
    convertLocalTime(value) {
      console.log(value);
      new Date(Date.parse(value + "+0000"));
      console.log(value);
    },
    beforeUpdateData(update_id) {
      const el = document.getElementById("updatesession");
      el.scrollIntoView({ behavior: "smooth" });
      let that = this;
      that.update_id = update_id;
      that.is_update_open = true;
    },

    // CRUD
    async insertData() {
      let that = this;
      console.log("masuk");
      await fetch("http://localhost:3030/insert_data", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `INSERT INTO peminjaman (tanggal_pinjam, tanggal_pengembalian, id_petugas, id_anggota, id_buku) VALUES ('${that.insert_data.tanggal_pinjam}','${that.insert_data.tanggal_pengembalian}', ${that.insert_data.id_petugas}, ${that.insert_data.id_anggota}, ${that.insert_data.id_buku}) `,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          that.updateAllData();
        });
      this.insert_data.id_anggota = "";
      this.insert_data.id_buku = "";
      this.insert_data.id_petugas = "";
      this.insert_data.tanggal_pengembalian = "";
      this.insert_data.tanggal_pinjam = "";
    },
    async deleteTabelPeminjaman(id_peminjaman) {
      let that = this;
      await fetch("http://localhost:3030/delete_tabel_peminjaman", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `${id_peminjaman}`,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          that.updateAllData();
        });
    },
    async updateData(e) {
      let that = this;
      // that.update_id = update_id;
      await fetch("http://localhost:3030/update_data", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `UPDATE peminjaman SET tanggal_kembali='${that.update_data.tanggal_kembali}', denda=${that.update_data.denda} WHERE id_peminjaman=${that.update_id}`,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          that.updateAllData();
        });
      this.update_data.tanggal_kembali = "";
      this.update_data.denda = "";
      that.is_update_open = false;
    },
    updateAllData() {
      let that = this;
      that.fetchPengunjung();
      that.fetchPeminjamJurusan();
      that.fetchPeminjamanBuku();
      that.fetchTabelPeminjaman();
    },
  },
  beforeMount() {
    let that = this;
    that.fetchPengunjung();
    that.fetchPeminjamJurusan();
    that.fetchPeminjamanBuku();
    that.fetchTabelPeminjaman();
  },
};
</script>
