import React from 'react';
import Nav from '../../app/components/Nav';
import Footer from '../../app/components/footer';

export default function threelevel({ data }) {
    return (
        <div>
            <Nav />
            {data.map(g => (
                <div key={g.id}>{g.name}</div>
            ))}
            <Footer />
        </div>
    );
}
export async function getStaticProps() {
    const res = await fetch(
        `https://muhaddith-api-seven.vercel.app/api/three-level`
    );
    const data = await res.json();

    return {
        props: { data },
    };
}
