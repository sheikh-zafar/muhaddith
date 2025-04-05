import React from 'react'
import Nav from '../Nav';
import Footer from '../footer';
async function getOnLevelData() {
  const res = await fetch(
      `https://muhaddith-api-seven.vercel.app/api/one-level`
  );
  const data = await res.json();
  return data;

}

export default async function OneLevelPage() {
  const data = await getOnLevelData();
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
