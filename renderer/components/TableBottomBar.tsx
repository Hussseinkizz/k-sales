import { Pagination } from 'flowbite-react';
import React from 'react';

// v2.0.0 Todo: Show storage usage on the bottom left!
type Props = {};

const TableBottomBar = (props: Props) => {
  const selectedCount = 0;
  const totalSelectableCount = 50;
  const totalDataCount = 978;
  const currentStartItemNumber = 1;
  const endItemNumber = 15;
  const grandSales = 50000;

  // handle table page change
  const onPageChange = (newPage) => {
    // navigate to new page!
    console.log(newPage);
  };

  return (
    <section className="w-full flex flex-col flex-auto justify-between items-center p-2 cursor-pointer bg-white rounded-md shadow-md mt-2">
      {/* The Tob Side */}
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <span className="font-bold">{`${selectedCount}/${totalSelectableCount}`}</span>
          <span className="text-slate-600">items selected</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-600">Grand Total Sales:</span>
          <span className="font-bold">{grandSales} Shs.</span>
        </div>
      </div>
      {/* The Bottom Side */}
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-600">show upto</span>
          {/* Page Length Dropdown */}
          <span>50</span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-slate-600">showing</span>
          <span className="font-bold">
            {`${currentStartItemNumber}-${endItemNumber}`}
          </span>
          <span className="text-slate-600 px-1">of</span>
          <span className="font-bold">{totalDataCount}</span>
        </div>
        {/* The Pagination Component */}
        <div className="flex justify-between items-center gap-2">
          <Pagination
            currentPage={1}
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={50}
          />
        </div>
      </div>
    </section>
  );
};

export default TableBottomBar;
