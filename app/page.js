import Head from 'next/head';
import Image from 'next/image';
import Footer from './components/footer';
import logo from '../public/shkzafariconremovebg.png';
import sheikhzafarlogo from '../public/img/20.png';
import pic1 from '../public/img/1.png';
import pic2 from '../public/img/2.png';
import pic3 from '../public/img/3.png';
import pic4 from '../public/img/4.png';
import pic5 from '../public/img/5.png';
import pic6 from '../public/img/6.png';
import Link from 'next/link';
import Nav from './components/Nav';
import PopularSharh from './components/popularsharh';

export default async function Page() {
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

            <main className="mx-auto">
                <div className="flex justify-center relative m-auto bg-bgcolor">
                    <Image
                        src={sheikhzafarlogo}
                        width="1080"
                        className="w-full"
                        height="500"
                        alt="ahle hadees"
                    />
                    <div className="mt-56 lg:mt-40 md:mt-40 xs:mt-7 xxs:mt-10 lg:mx-auto text-center text-primarytext absolute">
                        <h1 className="text-5xl lg:text-4xl md:text-4xl xs:text-base xxs:text-xl">
                            Upon the way of Salaf as-saliheen&nbsp;
                        </h1>
                        <p className="text-lg text-white md:text-base xs:text-xs xxs:text-xs xs:mt-2 xxs:mt-2 xs:mx-1 xxs:mx-1">
                            Includes Lectures, Bayan, Explanation of Books,
                            Jummuah Khutbahs and many more
                        </p>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            All Lectures
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto text-center mt-10">
                    <h6 className="text-primarytext text-5xl lg:text-4xl sm:text-2xl xs:text-base xxs:text-2xl md:text-4xl font-extrabold font-sans">
                        About Sheikh zafarulhasan Madani
                    </h6>
                    <hr className="bg-bgcolor text-2xl" />
                </div>
                <div className="max-w-7xl mx-auto mt-3">
                    <div className="flex">
                        <div className="w-1/6">
                            <Image
                                src={logo}
                                alt="ahle ilm"
                                width="250"
                                height="150"
                            />
                        </div>
                        <div className="w-5/6">
                            <p className="text-secondarytext text-lg md:text-base xs:text-xs xxs:text-xs my-4 xs:my-3 xxs:my-3">
                                Zafar-ul-Hasan Ahmedullah was born in 1956. He
                                hails from a religious family of eight members
                                from Changhaipur (Pratapgarh), a small town in
                                Uttar Pradesh, India. His father was a farmer
                                and Quran teacher, used to attend lectures of
                                Moulana Ahmedullah Pratapgadhi, Moulana
                                Sanaullah Amritseri...
                            </p>
                            <Link
                                href="/about"
                                className="bg-primarytext rounded-xl hover:shadow-2xl p-3 text-base font-bold font-mono "
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>

                <PopularSharh />

                <div className="max-w-7xl mx-auto text-center mt-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 gap-4">
                        <div>
                            <Image
                                src={pic1}
                                className="rounded-2xl hover:hue-rotate-15"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                        <div>
                            <Image
                                src={pic2}
                                className="rounded-2xl"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                        <div>
                            <Image
                                src={pic3}
                                className="rounded-2xl"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                        <div>
                            <Image
                                src={pic4}
                                className="rounded-2xl"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                        <div>
                            <Image
                                src={pic5}
                                className="rounded-2xl"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                        <div>
                            <Image
                                src={pic6}
                                className="rounded-2xl"
                                width="fill"
                                alt="ahle hadees"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <audio
                        controls
                        src="https://docs.google.com/uc?export=open&id=1RU2IpF7zN_j3T7KXlEQUPnCET-WlAg9i"
                        type="audio/mp3"
                    ></audio>
                </div>
            </main>
            <Footer />
        </div>
    );
}
