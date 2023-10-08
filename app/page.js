"use client"
import Carasole from '@/components/Carasole';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Trending from '@/components/Trending';
import Trendingtv from '@/components/Trendingtv';
import Footer from '@/components/Footer';

const Page = () => {
  return (
    <div className=''>
      <Carasole />
  <Trending/>
  <Trendingtv/>
  <Footer/>
    </div>
  );
};

export default Page;
