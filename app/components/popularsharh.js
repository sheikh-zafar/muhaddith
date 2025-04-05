'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

const settings = {
    centerMode: true,
    arrows: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function PopularSharh() {
    return (
        <div>
            <div className="max-w-7xl mx-auto text-center mt-10">
                <h6 className="text-primarytext text-5xl lg:text-4xl sm:text-2xl xs:text-base xxs:text-2xl md:text-4xl font-extrabold font-sans">
                    Popular Sharh of Books
                </h6>
                <hr className="bg-bgcolor text-2xl" />
            </div>
            <div className="mx-auto mt-3">
                <Slider {...settings} className="py-10 p-2">
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Arbaoona Nawawi</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="40 nawawi hadith"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/arbaoon.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>

                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Targeeb wat Tarheeb</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="targeeb wat tarheeb munzari"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/targeeb.jfif"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Raful Malam</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Raful malam"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/rafulmalam.webp"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Riyad Us saliheen</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Riyad us saliheen"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/riyadussaliheen.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Bulugh al Maram Min adillatil ahkam</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Bulugh al Maram"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/bulugh.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Kitab At Tawheed</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Kitab At tawheed"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/kitabattawheed.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Shamail Muhammadiyah</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Shamail Muhammadiyah"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/shamail.webp"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Sharh as Sunnah</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="sharh sunnah"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/sharhassunnah.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Usool Ath thalathah</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="Usool Ath thalathah"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/usoolesalasa.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-extrabold text-center">
                            <h2>Tadween As Sunnah</h2>
                            <div className="flex justify-center">
                                <Link href="/">
                                    <Image
                                        alt="tadween as sunnah"
                                        className="rounded-sm border-4 border-darkblue"
                                        src="/img/books/tadween.jpg"
                                        width={200}
                                        height={500}
                                    />
                                </Link>
                            </div>
                        </div>
                        <button className="bg-white text-black font-bold my-5 py-2 px-4 xs:py-1 xs:px-2 xs:my-2 xxs:py-1 xxs:px-2 xxs:my-2 xxs:text-sm xs:text-sm rounded">
                            Listen
                        </button>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
