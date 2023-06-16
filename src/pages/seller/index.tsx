import Head from 'next/head'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import MainNavBar from '@/components/navigation/main_navbar'
import SidebarLeft from '@/components/sidebar/sidebar_left'

const Seller: NextPage = () => {

  return (
    <>
      <Head>
        <title>Seller - HayaSasa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen md:h-screen bg-black text-white">
        <MainNavBar />
        <div className="flex">
          <div className="hidden sm:block sm:w-1/4 my-16 h-screen border-r border-gray-500">
            <SidebarLeft />
          </div>

          <div className="w-full sm:w-1/2 my-16 h-screen black-shade-20">

          </div>
        </div>
      </main>
    </>
  );
};

export default Seller;
