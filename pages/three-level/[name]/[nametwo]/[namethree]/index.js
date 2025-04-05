import Head from 'next/head';
import React from 'react';
import Nav from '../../../../Nav';
import Footer from '../../../../footer';
import { useRouter } from 'next/router';

export default function Nametwo({
    name,
    nametwo,
    namethree,
    childInfo,
    childName,
}) {
    const router = useRouter();
    const currentPath = router.pathname;
    console.log(currentPath);

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
            {name} - {nametwo} - {namethree}
            {childInfo.map(i => (
                <div key={i.id}>
                    {i.year} - {i.name}
                </div>
            ))}
            <Footer />
        </div>
    );
}
export async function getStaticPaths() {
    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/three-level`
    );
    const data = await res.json();
    const paths = data.flatMap(i =>
        i.children.flatMap(j =>
            j.children.map(k => k => ({
                params: {
                    name: i.name,
                    nametwo: j.name,
                    namethree: k.name,
                },
            }))
        )
    );

    return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
    const { name, nametwo, namethree } = params;

    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/three-level/${name}/${nametwo}/${namethree}`
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
            childName,
        },
    };
}
