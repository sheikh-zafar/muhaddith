import Head from 'next/head';
import React from 'react';

export default function Schedule() {
    return (
        <div className="max-w-7xl mx-auto ">
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
            <div className="text-center mt-10">
                <h6 className="text-primarytext xl:text-6xl lg:text-6xl sm:text-3xl md:text-3xl  font-extrabold font-sans">
                    About Sheikh zafarul hasan Madani
                </h6>
                <hr className="bg-bgcolor text-2xl" />
            </div>
            <div className=" text-base my-4 ">
                <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-calendar-o" aria-hidden="true"></i> Day
                  </th>
                  <th scope="col">
                    {' '}
                    <i
                      className="fa fa-sticky-note-o"
                      aria-hidden="true"
                    ></i>{' '}
                    Lecture name
                  </th>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-clock-o" aria-hidden="true"></i>{' '}
                    Location
                  </th>
                  <th scope="col">
                    {' '}
                    <i className="fa fa-clock-o" aria-hidden="true"></i> Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Explanation of the Biography Of Prophet Muhammad(ﷺ)</td>

                  <td>
                    <a
                      href="https://youtube.com/Zafarulhasan"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      Online
                    </a>
                  </td><td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>The Explanation of Shama&apos;il Muhammadiyyah</td>

                  <td>
                    <a
                      href="https://youtube.com/Zafarulhasan"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      Online
                    </a>
                  </td><td>After Isha</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday </th>
                  <td>
                    Breezes of Imaan
                    <br />
                    <hr />
                    Breezes of Imaan
                  </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/oYtgodMLQv6McE2r7"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp; Masjid Khadija bint Khuwailid - Al-Nahda-2 (Click
                      here)
                    </a>
                    <br />
                    <hr />
                    <a
                      href="https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Yusuf Baqar (Click here)
                    </a>
                  </td>
                  <td>
                    After Maghrib
                    <br />
                    <hr />
                    After Isha
                  </td>
                </tr>

                <tr>
                  <th scope="row">Wednesday بروز بدھ</th>
                  <td>Quran Tafseer </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>
                <tr>
                  <th scope="row">Thursday بروز جمعرات</th>
                  <td>Explanation of Bulugh Al Maram </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>

                <tr>
                  <th scope="row">Friday بروز جمعہ</th>
                  <td>Explanation of the book Al-Targheeb wat-Tarheeb</td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2
                      (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>Beauty of Islam </td>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/mscog2WwkqiHVszA8"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      &nbsp;Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al
                      Khaleel) (Click here)
                    </a>
                  </td>
                  <td>After Isha </td>
                </tr>

              </tbody></table>
            </div>
        </div>
    );
}
