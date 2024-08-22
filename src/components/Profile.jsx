"use client"


export default function Profile({ uang }) {

  return (
    <div className="flex justify-end m-4 text-slate-900">
      <p className="border-[2px] border-slate-900 p-2">{`Uang = ${uang}`}</p>
    </div>
  );
}
