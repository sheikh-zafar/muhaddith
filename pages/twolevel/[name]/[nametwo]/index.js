import Head from 'next/head';
import React from 'react';
import Nav from '../../../../app/components/Nav';

export default function NameThree({ name, nametwo, childInfo, childName }) {
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
            {childInfo.map(i => (
                <div key={i.id}>
                    {i.year} - {i.name} - {i.id}
                </div>
            ))}
        </div>
    );
}
export async function getStaticPaths() {
    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/two-level`
    );
    const data = await res.json();

    const paths = data.flatMap(p =>
        p.children.map(h => ({
            params: { name: p.name, nametwo: h.name },
        }))
    );
    console.log(data.flatMap(p => p.name))

    return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    const { name, nametwo } = params;

    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/two-level/${name}/${nametwo}`
    );
    const data = await res.json();

    const childInfo = [];
    const childName = [];

    data.forEach(item => {
        if (item.children) {
            item.children.forEach(child => {
                childInfo.push({
                    year: item.name,
                    name: child.name,
                    id: child.id,
                });
            });
        }
    });
    data.forEach(item => {
        if (item.children) {
            item.children.forEach(child => {
                childName.push({
                    name: child.name,
                });
            });
        }
    });

    console.log(childInfo);

    return {
        props: {
            data,
            childInfo,
            childName
        },
    };
}
