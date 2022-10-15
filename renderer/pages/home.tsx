import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminTable from '../components/AdminTable';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <section
        id="App"
        className="bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-50 w-full min-h-screen p-4">
        <AdminTable />
      </section>
    </React.Fragment>
  );
}

export default Home;
