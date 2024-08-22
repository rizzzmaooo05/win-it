export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-white px-10 py-4 flex justify-center items-center">
      <div className="flex flex-col w-[50%]">
        <a href="/" className="w-32">
          <h1 className="text-4xl font-bold">Win it!</h1>
          <h3 className="text-lg">If you can!</h3>
        </a>
      </div>
      <div className="flex w-[50%] justify-between">
        <a
          href="/"
          className="hover:border-b-[2px] hover:border-white p-4 transition-all"
        >
          Beranda
        </a>
        <a
          href="/tambah-uang"
          className="hover:border-b-[2px] hover:border-white p-4 transition-all"
        >
          Tambah Uang
        </a>
        <a
          href="/petunjuk"
          className="hover:border-b-[2px] hover:border-white p-4 transition-all"
        >
          Petunjuk
        </a>
      </div>
    </header>
  );
}
