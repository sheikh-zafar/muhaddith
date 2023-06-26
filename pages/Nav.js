import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <div>
            <nav className="flex h-12 items-center px-4 justify-between bg-bgcolor text-primarytext">
                <Link href="/" className="text-lg font-bold">
                    فضيلة الشيخ ظفر الحسن مدني حفظه الله
                </Link>
                <div className="text-secondarytext">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <button
                            type="button"
                            className="cursor-pointer text-xl px-5 py-5 rounded bg-transparent block xl:hidden outline-none focus:outline-none bg-white text-black"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    <div
                        className={
                            'xl:flex flex-grow items-center lg:flex 2xl:flex' +
                            (navbarOpen ? 'flex' : ' hidden')
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col xl:flex-row list-none xl:ml-auto 2xs:ml-auto xs:ml-auto">
                            <li className="nav-item">
                                <Link
                                    href={`/`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={`/schedule`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    Schedule
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={`/books`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    Books
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    href={`/dars`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    Duroos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={`/about`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href={`/links`}
                                    className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                                >
                                    Links
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
