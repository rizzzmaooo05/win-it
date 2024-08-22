export default function Profile({ uang }) {

  return (
    <div className="flex justify-end m-2 md:m-4 text-slate-900">
      <p className="border-[1px] md:border-[2px] text-sm md:text-md border-slate-900 p-1 md:p-2">{`Uang = ${uang}`}</p>
    </div>
  );
}
