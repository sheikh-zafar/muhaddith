import React from 'react';
import Nav from '../Nav';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../footer';

export default function Dars({ data }) {
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
            <div className="max-w-7xl mx-auto text-center mt-10">
                <h6 className="text-primarytext text-6xl lg:text-6xl  sm:text-2xl md:text-2xl font-extrabold font-sans">
                    Sharh of Books
                </h6>
                <hr className="bg-bgcolor text-2xl" />
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="xl:grid-cols-5 lg:grid-cols-5 sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg px-5 font-sans">
                    {data.map((post, i) => (
                        <div key={i}>
                            <Link
                                href="/dars/[name]"
                                as={'/dars/' + post.name}
                                title={post.name}
                            >
                                <p className="text-base hover:text-blue-700 focus:text-blue-700 h-full text-gray-500">
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    <Image
                                        src={'/img/' + post.images}
                                        alt={post.images}
                                        width={200}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    {post.name}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export async function getStaticProps() {
    const res = await fetch(`https://muhaddith-api-seven.vercel.app/api/dars`);
    const data = await res.json();

    return {
        props: { data },
    };
}
