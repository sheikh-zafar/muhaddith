import Head from 'next/head';
import React from 'react';
import Nav from '../../../Nav';

export default function NameThree({ name, nametwo }) {
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
            {name} - {nametwo}
        </div>
    );
}
export async function getStaticPaths() {
    const res = await fetch(`https://muhaddith-api-seven.vercel.app/api/dars`);
    const data = await res.json();
    const paths = data.map(p =>
        p.children.map(h => ({
            params: { name: h.name, nametwo: p.name },
        }))
    );

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { name, nametwo } = params;

    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/dars/${name}/${nametwo}`
    );
    const data = await res.json();
    const childrenname = data.map(i =>
        i.children.map(k => k.name).filter(j.children)
    );
    console.log(name, nametwo);
    const childrenfilter = data.map(j => j.children.filter(h => h.name));

    const childrenData =
        data
            .map(item =>
                item.children.map(child => ({
                    id: child.id,
                    name: child.name,
                }))
            )
            .flat() || data.map(item => item.name);

    const childrenid = data.map(i => i.children.map(k => k.id));

    return {
        props: {
            data,
            childrenname,
            childrenid,
            childrenfilter,
            childrenData,
        },
    };
}
