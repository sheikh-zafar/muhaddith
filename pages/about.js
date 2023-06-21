import Head from 'next/head';
import React from 'react'
import Nav from './Nav';

export default function About() {
  return (
      <div>
          <Head>
              <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
              <meta
                  name="description"
                  content="Preaching the way of Salaf as-saliheen || Includes Lectures, Bayan, Explanation of Books, Jummuah Khutbahs and many more"
              />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Nav />
          <main className="mx-auto">
              <div className="max-w-7xl mx-auto text-center mt-10">
                  <h6 className="text-primarytext text-6xl font-extrabold font-sans">
                      Top Sharh
                  </h6>
                  <hr className="bg-bgcolor text-2xl" />
              </div>
          </main>
      </div>
  );
}
