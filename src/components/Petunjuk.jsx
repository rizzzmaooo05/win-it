export default function Petunjuk() {
  return (
    <div className="w-full md:w-[70%] md:mx-auto p-4 text-justify">
      <h3 className="font-bold text-xl md:text-4xl md:mt-2 mb-2">Petunjuk Aturan Permainan</h3>
      <ol className="list-disc p-4 md:text-lg">
        <li>
          Permainan yang tersaji disini adalah permainan sederhana{" "}
          <b>Gunting Batu Kertas</b> yang tentunya sudah tidak asing buat kamu.
        </li>
        <li>
          Aturan mainnya pun tetap sama seperti pada umumnya, <b>Gunting mengalahkan Kertas</b>, <b>Batu mengalahkan Gunting</b>, dan <b>Kertas mengalahkan Batu</b>, tidak ada yang direkayasa dalam aturan main ini.
        </li>
        <li>
          Namun sesuai namanya, <b>Win it! If you can!</b>, walaupun aturan tidak direkayasa bukan berarti kamu akan memenangkan permainannya, hahaha.
        </li>
        <li>
          Pada <a href="/" className="font-bold underline">Layar Utama</a> akan terdapat beberapa tampilan, yaitu <b>Jumlah Uang</b>, <b>Tampilan Kartu</b>, <b>Tombol untuk memilih Gunting, Batu, atau Kertas</b>, <b>Tombol untuk memilih taruhan</b>, <b>Tombol MAIN</b>, serta <b>Tombol MAIN LAGi</b>
        </li>
        <li>
          Silahkan pilih antara Gunting, Batu, atau Kertas, kemudian pilih berapa uang yang dipertaruhkan, lalu klik tombol MAIN.
        </li>
        <li>
          Hasil dari permainan akan keluar setelah 3 detik, hasil ini akan menentukan apakah uangmu akan bertambah, tetap, atau berkurang sesuai dengan berapa uang yang dipertaruhkan.
        </li>
        <li>
          Klik tombol MAIN LAGI untuk memulai permainan kembali.
        </li>
        <li>
          Terlalu terlena untuk terus bermain hingga kehabisan uang? Tidak perlu khawatir, kamu dapat menambah uangmu dengan menjual apa yang kamu punya seperti mobil, motor, rumah, atau bahkan ginjal pada menu <a href="/tambah-uang" className="font-bold underline">Tambah Uang</a>, resiko ditanggung sendiri.
        </li>
        <li>
          Tanpa punya uang pun kamu tetap dapat bermain, namun jika kamu kalah, uangmu akan bernilai minus, yang artinya kamu berhutang, di situlah hidupmu akan hancur, hahaha.
        </li>
        <li>
          Permainan ini dirancang oleh aku, sudah pasti aku yang akan menang, seperti itu pula permainan pada judi online dirancang oleh bandar, bandar pula yang akan menang.
        </li>
        <li>Permainan ini dirancang sebagai simulasi dari permainan yang terdapat pada judi online untuk pengingat kita bahwa sekali kamu menyentuh permainan tersebut, kamu sudah dipastikan akan kalah dan kehilangan semua yang kamu punya, BERHATI-HATI LAH!!!</li>
      </ol>
    </div>
  );
}
