## how to build

`npm run build`

## Configuration Environment

### Server

server locate in ./server. here is the example configuration for server

```bash
PORT=3030
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=postgres
PGDATABASE=lib_magement
PGPORT=5434
```

> SQL QUERY on ./query.sql

### User Interface

example configuration for user interface

```bash
VUE_APP_TARGET_SERVER=http://localhost:3030
```

## Link Demonstration

link demo was [here](https://drive.google.com/file/d/1NANHuUZMP6TacieMFzAPw7lgQJ3Ez9PX/view?usp=sharing)

## Website Views

![alt](./public/117539.jpg)

> API List

```json
pengunjungBulanan: {
  bulan: number,
  banyak: string
}
```

```json
peminjam_jurusan: {
  jurusan: string,
  jumlah_peminjam: int
}
```

```json
peminjaman_setiap_bulan: {
  bulan: string,
  coalesce: int
}
```

```json
tabel_peminjaman: {
  denda: int,
  id_anggota: int,
  id_buku: int,
  id_peminjaman: int,
  id_petugas: int,
  tanggal_kembali: timestamp,
  tanggal_pengembalian: timestamp,
  tanggal_pinjam: timestamp
}
```

Big thanks to @sahrullahh has provided starter project i used on current project

[Windzo starter project](https://github.com/sahrullahh/windzo)
