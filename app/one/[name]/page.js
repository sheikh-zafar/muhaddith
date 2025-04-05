import React from 'react';
import Nav from '../../Nav';
import Footer from '../../footer';
import Head from 'next/head';

export async function generateStaticParams({ name }) {
    const posts = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/one-level/${name}`
    ).then(res => res.json());
    return posts.map(post => ({
        name: post.name,
    }));
}

export default async function NameOnePage({ params }) {
    const { name } = params;
    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/one-level/${name}`
    );
    const data = await res.json();
    const childrenfilter = data.map(j => j.children.filter(h => h.name));

    const twolevel = data.map(j =>
        j.children.filter(h => h.children).map(f => f.children.map(g => g.name))
    );

    const levelone =
        data
            .map(item =>
                item.children.map(child => ({
                    id: child.id,
                    name: child.name,
                }))
            )
            .flat() || data.map(item => item.name);
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
                    {levelone.map((post, i) => (
                        <div key={i}>
                            <p className="text-base hover:text-blue-700 focus:text-blue-700 h-full text-gray-500">
                                {post.name}
                                <i className="fas fa-map-marker-alt"></i>{' '}
                                <div>
                                    <audio
                                        controls
                                        src={
                                            `https://docs.google.com/uc?export=open&id=` +
                                            post.id
                                        }
                                        type="audio/mp3"
                                    ></audio>
                                </div>
                            </p>
                        </div>
                    ))}
                </div>
                RU2IpF7zN_j3T7KXlEQUPnCET-WlAg9i
                <audio
                    controls
                    src={`https://docs.google.com/uc?export=open&id=RU2IpF7zN_j3T7KXlEQUPnCET-WlAg9i`}
                    type="audio/mp3"
                ></audio>
            </div>
            <Footer />
        </div>
    );
}
