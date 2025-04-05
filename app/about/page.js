import Head from 'next/head';
import React from 'react';
import Nav from '../Nav';
import Link from 'next/link';
import Footer from '../footer';

export default function About() {
    return (
        <div>
            <Head>
                <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
                <meta
                    name="description"
                    content="Upon the way of Salaf as-saliheen || Includes Lectures, Bayan, Explanation of Books, Jummuah Khutbahs and many more"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className="mx-auto max-w-7xl">
                <div className="text-center mt-10">
                    <h6 className="text-primarytext xl:text-6xl lg:text-6xl sm:text-3xl md:text-3xl  font-extrabold font-sans">
                        About Sheikh zafarul hasan Madani
                    </h6>
                    <hr className="bg-bgcolor text-2xl" />
                </div>
                <div className=" text-base my-4">
                    Zafar-ul-Hasan Ahmedullah was born in 1956. He hails from a
                    religious family of eight members from Changhaipur
                    (Pratapgarh), a small town in Uttar Pradesh, India. His
                    father was a farmer and Quran teacher, used to attend
                    lectures of Moulana Ahmedullah Pratapgadhi, Moulana
                    Sanaullah Amritseri and others ulamas. Right from childhood
                    Shaikh Zafar-ul-Hasan was interested in Islam and had a
                    burning desire to call people to Islam when he grew up
                </div>
                <h6 className="text-primarytext lg:text-2xl sm:text-lg xl:text-2xl md:text-lg font-extrabold font-sans">
                    Education
                </h6>
                <div className="text-base my-4">
                    Shaikh Zafar-ul-Hasan completed his primary schooling in his
                    hometown Changhaipur, in the year 1970. Then, with an
                    intention of working towards the fulfillment of his
                    childhood ambition – i.e. of being actively involved in
                    Da’wah and various other Islamic activities, he embarked on
                    the path of gaining Islamic Education and knowledge. In the
                    year 1975 he shifted to Jami’a Salafiya in Banaras, UP,
                    India and acquired the ‘Alimiyat and Fadhilat degree in the
                    year 1978.
                </div>
                <div className="text-base my-4">
                    He also availed the Munshi and Maulvi degree from Jami’a
                    Salafia, Banaras, in the year 1976. All of these degrees are
                    authenticated by the Allahabad board (Darse Nizamia)
                </div>
                <div className="text-base my-4">
                    Having successfully completed his studies from Jam’ia
                    Salafiya, for a year he was chosen to be a Teacher in Jam’ia
                    Mohammadiya Malegaon.
                </div>
                <div className="text-base my-4">
                    Later, in the year 1980 (1403HJ), owing to his excellent
                    performance, he was conferred the honour of being chosen to
                    go to Jam’ia Islamiya in Madina Al Munawwarah for higher
                    studies, wherein he completed his degree from the Hadith
                    faculty.
                </div>
                <h6 className="text-primarytext lg:text-2xl sm:text-lg xl:text-2xl md:text-lg font-extrabold font-sans">
                    His teacher and Shuyookh
                </h6>
                <div className="text-base my-4">
                    By the Grace of Almighty Allah azza wa jal, Shaikh Zafar had
                    the opportunity to meet and seek religious knowledge from
                    various renowned Shuyookh and ‘Ulama. A few of them have
                    been named below:
                </div>
                <div className="text-base my-4">
                    <ol className="list-decimal">
                        <li>
                            {' '}
                            Shaikh Al Hadith Shams Al-haq Salafi (Rahimahullah).
                        </li>
                        <li> Shaikh Al Jam’ia Salafiya Moulana Abdul Waheed</li>
                        <li>
                            {' '}
                            Rahmani (Rahimahullah). Moulana Azad Rahmani
                            (Rahimahullah).{' '}
                        </li>
                        <li>Shaikh Mohammed Amaan Al Jami (Rahimahullah). </li>
                        <li>Shaikh Mohammed Umar Fallata (Rahimahullah). </li>
                        <li>
                            Shaikh Abdus-salam Rahmani Al Madani (Hafidullah)
                            (Shaikh Zafar took the ‘Ijaza in hadith from him).{' '}
                        </li>
                        <li>
                            Shaikh Anisur-Rahman Aazmi Al Madani (Hafidhullah).{' '}
                        </li>
                        <li>
                            Shaikh Salih Al Suhaimi (Hafidhulla) (Teacher in
                            Masjid An-Nabawi).
                        </li>
                        <li>Shaikh Rabee Bin Hadi</li>
                        <li>Al Madkhali (Hafidhullah).</li>
                        <li>Maulana Mahfoozur-Rahmaan Faiza (Hafidhullah).</li>
                        <li> Dr. Ziya Ar-rahmaan Aadhmi (Hafidhullah)</li>
                    </ol>
                </div>
                <div className="text-base my-4">
                    Immediately after the completion of his Degree from the
                    Islamic University in Madina, he was appointed as a Teacher
                    for Madrassah Mohammediya Nander, in Bombay. He worked there
                    for one year. Later on, in the year 1984 he was chosen by
                    the Government of Kingdom of Saudi Arabia for Da’awah
                    purpose, to teach and call people to Islam and was then sent
                    to Dubai, United Arab Emirates.
                </div>
                <div className="text-base my-4">
                    For almost 25 years now, mashaAllah, he has been working In
                    the United Arab Emirates in the field of Da’awah, calling
                    people to Islam and giving Islamic lectures. He has been
                    invited to speak at various international Islamic
                    conferences and frequently visits India on a regular basis
                    for spreading and teaching the people about Islam. In 2004,
                    the Government of Saudi Arabia bestowed on him the honour of
                    being the Official Teacher for Hajj and the rulings
                    surrounding it.
                </div>
                <div className="text-base my-4">
                    The Shaikh has completely dedicated his life to Da’awah in
                    U.A.E., wherein he is currently based and is especially
                    active during the Dubai Shopping Festival, a yearly event
                    which gathers people from all around the World and provides
                    an excellent opportunity to call people to Islam.
                </div>
                <h6 className="text-primarytext lg:text-2xl sm:text-lg xl:text-2xl md:text-lg font-extrabold font-sans">
                    BOOKS HE (حفظه اللّه) AUTHORED
                </h6>
                <div className="text-base my-4">
                    By the Grace of Allah azza wa jal, Shaikh Zafar, with his
                    immense knowledge has had the privilege of authoring a few
                    books in Urdu, some of which are mentioned here below:
                </div>
                <div className="text-base my-4">
                    <ol className="list-decimal">
                        <li>Tariqai Hajj (published)</li>
                        <li> Mamnou As-Salah Ind-Al Iqamah (published)</li>
                        <li>
                            Ithibaat Ar-Rakatayn Qabl Al-Magreb (published){' '}
                        </li>
                        <li>Ahkam-e- Aqiqa</li>
                        <li>Khutbaat Wa Maqalaat</li>
                        <li>Duroos-e- Hadith</li>
                    </ol>
                </div>
                <h6 className="text-primarytext lg:text-2xl sm:text-lg xl:text-2xl md:text-lg font-extrabold font-sans">
                    HIS CURRENT WORKS
                </h6>
                <div className="text-base my-4">
                    Lectures of Sheikh Zafarulhasan حفظه الله are held on daily
                    basis and it is brodcasted on youtube, mixlr and on zoom by
                    the permission of الله عز و جل. Kindly take a note of his
                    schedule and add the schedule to your google calendar. And
                    click here to go to{' '}
                    <Link
                        href="/schedule"
                        className="underline text-secondarytext"
                    >
                        Schedule Page
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
