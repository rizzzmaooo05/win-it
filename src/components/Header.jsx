export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white px-10 py-2 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start text-center w-full md:w-[50%]">
        <a href="/" className="w-32">
          <h1 className="text-2xl md:text-4xl font-bold">Win it!</h1>
          <h3 className="text-sm md:text-lg">If you can!</h3>
        </a>
      </div>
      <div className="flex items-center w-full md:w-[50%] justify-around md:justify-between text-sm md:text-md">
        <a
          href="/"
          className="hover:border-b-[2px] hover:border-white p-2 md:p-4 transition-all"
        >
          Beranda
        </a>
        <a
          href="/tambah-uang"
          className="hover:border-b-[2px] hover:border-white p-2 md:p-4 transition-all"
        >
          Tambah Uang
        </a>
        <a
          href="/petunjuk"
          className="hover:border-b-[2px] hover:border-white p-2 md:p-4 transition-all"
        >
          Petunjuk
        </a>
      </div>
    </header>
  );
}
