import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav from '../../../app/components/Nav';
import Footer from '../../../app/components/footer';

export default function NameTwo({ data, childrenfilter, twolevel }) {
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
            <div className="max-w-7xl mx-auto mt-10">
                <div className="xl:grid-cols-5 lg:grid-cols-5 gap-5 sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg px-5 font-sans">
                    {twolevel.map((post, i) => (
                        <div key={i}>
                            <p className="text-base hover:text-blue-700 focus:text-blue-700 h-full text-gray-500">
                                {post.name}
                                <i className="fas fa-map-marker-alt"></i>{' '}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {twolevel.map((j, i) => (
                <div key={i}>{j.name}</div>
            ))}
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/two-level`
    );
    const data = await res.json();
    const paths = data.map(post => ({
        params: {
            name: post.name,
        },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { name } = params;

    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/two-level/${name}`
    );
    const data = await res.json();
    const childrenfilter = data.map(j => j.children.filter(h => h.name));

    const twolevel =
        data
            .map(item =>
                item.children.map(child => ({
                    id: child.id,
                    name: child.name,
                }))
            )
            .flat() || data.map(item => item.name);

    return {
        props: {
            data,
            childrenfilter,
            twolevel,
        },
    };
}
