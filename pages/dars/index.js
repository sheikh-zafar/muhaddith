import React from 'react';

export default function Dars() {
  return <div>Dars</div>;
}
export async function getStaticProps() {
  const res = await fetch(`https://muhaddith-api-seven.vercel.app/api/dars`);
  const data = await res.json();
  console.log(data);

  return {
    props: {},
  };
}
