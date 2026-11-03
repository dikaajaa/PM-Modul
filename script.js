
let nama = "Handika Pratama";
let semester = 3;
const jurusan = "Teknologi Informasi";

document.querySelector("#sapaan").textContent = "Halo, saya " + nama + ", mahasiswa semester " + semester + " " + jurusan + "."

let tahunMasuk = 2025;
let tahunLulus = tahunMasuk + 4;
let sisaSemester = 8 - semester;

document.querySelector("#info-tambahan").textContent = "Perkiraan lulus tahun " + tahunLulus + " (" + sisaSemester + " semester lagi).";

let jam = new Date().getHours();
let waktu;

if (jam < 10) {
    waktu = "pagi";
} else if (jam < 15) {
    waktu = "siang";
} else if (jam < 18) {
    waktu = "sore";
} else {
    waktu = "malam";
}

document.querySelector("#sapaan").textContent = "Selamat " + waktu + ", saya " + nama + ", mahasiswa semester " + semester + ", jurusan " + jurusan + ".";

let keahlianTambahan = [
    { nama: "Git & GitHub", level: "Menengah" },
    { nama: "Responsive Web Design", level: "Dasar"},
    { nama: "Dasar JavaScript DOM", level: "Dasar"},
]

keahlianTambahan.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item.nama + " - " + item.level;
    document.querySelector("#keahlian-tambahan").appendChild(li);
});

function evaluasiStudi(mhs) {
  let sisaSemester = 8 - mhs.semester;
  let tahunLulus = mhs.tahunMasuk + 4;
 
  if (sisaSemester <= 2) {
    return "Sebentar lagi lulus! Tinggal " + sisaSemester + " semester lagi, semangat " + mhs.nama + "!";
  } else {
    return mhs.nama + " masih semester " + mhs.semester + ", perkiraan lulus " 
+ tahunLulus + ".";
  }
}
 
document.querySelector("#btn-cek").addEventListener("click", function () {
  document.querySelector("#hasil-cek").textContent = evaluasiStudi(mahasiswa);
});

function validasiForm(event) {
    let namaInput = document.querySelector("#nama").value;

    if (namaInput === "") {
        event.preventDefault();
        document.querySelector("#hasil-form").textContent = "Nama wajib diisi sebelum pesan dikirim!";
    } else {
        document.querySelector("#hasil-form").textContent = "";
    }
}

document.querySelector("#form-kontak").addEventListener("submit", validasiForm);

let mahasiswa = {
    nama: "Handika Pratama",
    semester: 3,
    jurusan: "Teknologi Informasi",
    tahunMasuk: 2025,
    hobi: "Coding & Desain Web",
};

document.querySelector("#label-semester").textContent = "Semester " + mahasiswa.semester + " - " + mahasiswa.jurusan;
document.querySelector("#info-tambahan").innerHTML += "<br>Hobi: " + mahasiswa.hobi;

let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]

function buatSapaan(mhs, waktu, namaHari) {
    return "Selamat " + waktu + ", hari " + namaHari + ". Saya " + mhs.nama + ", mahasiswa semester " + mhs.semester + " " + mhs.jurusan + ".";
}

let namaHariIni = hari[new Date().getDay()];

document.querySelector("#sapaan").textContent = buatSapaan(mahasiswa, waktu, namaHariIni); 

let pengalaman = [
    { tahun: 2024, kegiatan: "Mengikuti pelatihan dasar pemrograman web", peran: "Peserta" },
    { tahun: 2025, kegiatan: "Magang singkat sebagai asisten lab komputer", peran: "Asisten" },
    { tahun: 2026, kegiatan: "Mulai mengerjakan proyek kelompok Pemrograman Website", peran: "Frontend Developer" },
];
 
pengalaman.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item.tahun + " — " + item.kegiatan + " (" + item.peran + ").";
    document.querySelector("#daftar-pengalaman").appendChild(li);
});

function cekKesiapanUTS(mhs) {
    return "Profil " + mhs.nama + " memiliki " + keahlianTambahan.length + " keahlian tambahan dan " + pengalaman.length + " pengalaman yang tercatat — siap direview menjelang UTS.";
}
 
document.querySelector("#status-uts").textContent = cekKesiapanUTS(mahasiswa);
