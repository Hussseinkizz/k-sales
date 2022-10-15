import React from 'react';
import TableSearch from './TableSearch';
import { IoAdd } from 'react-icons/io5';
import { HiDotsVertical } from 'react-icons/hi';

type Props = {};

// v2.0.0 Todo: Make top left title customizable!

const TableTopBar = (props: Props) => {
  return (
    <section className="w-full flex flex-auto justify-between items-center p-2 cursor-pointer bg-white rounded-md shadow-md mb-2">
      <h1 className="font-bold uppercase text-2xl">Hot Technologies</h1>
      <div className="w-1/2">
        <TableSearch placeholder="Search here..." />
      </div>
      <div className="flex justify-between items-center gap-2">
        <button className="flex justify-between items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors rounded-lg shadow-sm text-white py-2 px-4">
          <IoAdd className="h-5 w-5" />
          <span>New Entry</span>
        </button>
        <HiDotsVertical className="w-5 h-5 text-slate-800 hover:text-slate-600 transition-colors" />
      </div>
    </section>
  );
};

export default TableTopBar;
