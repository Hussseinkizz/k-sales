import React from 'react';

import Image from 'next/image';

import { Table, Checkbox } from 'flowbite-react';

import { HiTrash, HiPencil } from 'react-icons/hi';

import { data } from '../data';
import placeholder from '../public/images/placeholder.jpeg';

import TableBottomBar from './TableBottomBar';
import TableTopBar from './TableTopBar';

type Props = {};

const AdminTable = (props: Props) => {
  return (
    <section className="cursor-pointer capitalize">
      {/* The Table Header */}
      <TableTopBar />
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell className="!p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Poster</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>category</Table.HeadCell>
          <Table.HeadCell>sub category</Table.HeadCell>
          <Table.HeadCell>episode</Table.HeadCell>
          <Table.HeadCell>vj</Table.HeadCell>
          <Table.HeadCell>year</Table.HeadCell>
          <Table.HeadCell>Created</Table.HeadCell>
          <Table.HeadCell>Last Modified</Table.HeadCell>
          <Table.HeadCell>Available Copies</Table.HeadCell>
          <Table.HeadCell>Sold Copies</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Total Sales</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        {/* The Table Body */}
        <Table.Body className="divide-y">
          {data.map((item) => (
            <Table.Row
              key={item.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                <span className="w-64 h-64">
                  <Image
                    // layout="fill"
                    // objectFit="fill"
                    height={100}
                    width={100}
                    src={item.image ? item.image : placeholder}
                    alt=""
                    className="aspect-square aspect-1 w-64 h-64 rounded-lg hover:opacity-75"
                  />
                </span>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.title}
              </Table.Cell>
              <Table.Cell>{item.category}</Table.Cell>
              <Table.Cell>{item.subcategory}</Table.Cell>
              <Table.Cell>{item.episode}</Table.Cell>
              <Table.Cell>{item.vj}</Table.Cell>
              <Table.Cell>{item.year}</Table.Cell>
              <Table.Cell>{item.created_at}</Table.Cell>
              <Table.Cell>{item.modified_at}</Table.Cell>
              <Table.Cell>{item.available_copies}</Table.Cell>
              <Table.Cell>{item.sold_copies}</Table.Cell>
              <Table.Cell>{item.price_per_copy}</Table.Cell>
              <Table.Cell>{item.sold_copies * item.price_per_copy}</Table.Cell>
              {/* Table Actions */}
              <Table.Cell>
                <span className="flex">
                  <HiPencil className="w-5 h-5 font-medium text-blue-600 hover:text-blue-500 transition-colors dark:text-blue-500" />
                  <HiTrash className="w-5 h-5 font-medium text-blue-600 hover:text-blue-500 transition-colors dark:text-blue-500" />
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* The Table Footer */}
      <TableBottomBar />
    </section>
  );
};

export default AdminTable;
