
export default function Home() {
  return (
    <>
    <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-center py-4 px-6">
            {/* Left Side: Links */}
            <div className="flex space-x-4 mr-12">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Pages</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Our Services</a>
            </div>

            {/* Center: Logo */}
            <div className=" text-2xl font-bold">
                <a href="#" className="text-black">LA NOTTÉ <span className="text-sm font-normal block text-center">NAIL
                        STUDIO</span></a>
            </div>

            {/* Right Side: Links and Button */}
            <div className="flex items-center space-x-4 ml-12">
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Gallery</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Booking</a>
                <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Contact</button>
            </div>
        </div>
    </nav>

    <div className="px-20">
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                    <i className="fas fa-spa text-4xl text-pink-500">
                    </i>
                </div>
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-4">
                    Experience the Best Threading
                </h1>
                <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-pink-500 mb-4">
                    Services
                </h2>
                <p className="text-gray-600 mb-8">
                    There are many variations
                </p>
                <button className="bg-pink-500 text-white py-2 px-6 rounded-full flex items-center mx-auto lg:mx-0">
                    <i className="fas fa-calendar-alt mr-2">
                    </i>
                    Make Appointment
                </button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                <img alt="Woman applying makeup with a brush, with a green leaf in the background" className="rounded-full"
                    height="400"
                    src="https://storage.googleapis.com/a1aa/image/L0d5pPpkzMS5_meiGxh1HzCzCYQScF7P1qQC3lTwV0s.jpg"
                    width="400" />
            </div>
        </div>

        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    An
                    <span className="text-black">
                        Increadible
                    </span>
                    <span className="text-pink-400">
                        Spa Experience
                    </span>
                </h1>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                    accumsan lacus vel facilisis.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">
                        Clay Masks
                    </h2>
                    <p className="text-gray-600 mb-4">
                        A good clay mask can go a long way to draw out impurities skin.
                    </p>
                    <img alt="Various clay masks and spa items" className="w-full h-48 object-cover mb-4 rounded-lg"
                        height="200"
                        src="https://storage.googleapis.com/a1aa/image/SqQkc4WLv-hVnC69uNmVSxgZwV-Ir5-9jcoqAUrkxtE.jpg"
                        width="300" />
                    <button className="bg-pink-400 text-white px-4 py-2 rounded-full">
                        <i className="fas fa-shopping-cart mr-2">
                        </i>
                        Shop Now
                    </button>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">
                        Wellness &amp; Spa
                    </h2>
                    <p className="text-gray-600 mb-4">
                        A good clay mask can go a long way to draw out impurities skin.
                    </p>
                    <img alt="Smiling woman with spa items" className="w-full h-48 object-cover mb-4 rounded-lg"
                        height="200"
                        src="https://storage.googleapis.com/a1aa/image/fsV4I0O6M6JdjQk7P2wE2iAoq_W-sCEWLc1G-WUePh0.jpg"
                        width="300" />
                    <button className="bg-pink-400 text-white px-4 py-2 rounded-full">
                        <i className="fas fa-shopping-cart mr-2">
                        </i>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>

        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 p-4">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-quote-left text-orange-500 mr-2">
                        </i>
                        <span className="text-gray-500 font-semibold">
                            TESTIMONIALS
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">
                        What Our Customers Saw
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar s leo.
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center">
                        SEE MORE
                        <i className="fas fa-arrow-right ml-2">
                        </i>
                    </button>
                    <div className="flex mt-6">
                        <img alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40"
                            src="https://storage.googleapis.com/a1aa/image/YAwGYeeaCgk4pdxmZ28I-iVUxkO-ecYc8S7Wu6M_rNQ.jpg"
                            width="40" />
                        <img alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40"
                            src="https://storage.googleapis.com/a1aa/image/xoJPY8fOJyKBKeMbMlrFYYF3Rm5b7gM2sp75pVkBcBw.jpg"
                            width="40" />
                        <img alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40"
                            src="https://storage.googleapis.com/a1aa/image/aObMUr0OwxK2yMx1aariNalgyKEXcb9s3fz1FYyIec0.jpg"
                            width="40" />
                        <img alt="Customer 4" className="w-10 h-10 rounded-full border-2 border-white -ml-2" height="40"
                            src="https://storage.googleapis.com/a1aa/image/Z6EC9YdBSeVv06wKOcvFWWMmKRdt0V2iXGCL1Coqr5k.jpg"
                            width="40" />
                        <div
                            className="w-10 h-10 rounded-full border-2 border-white -ml-2 bg-gray-300 flex items-center justify-center text-gray-600">
                            +
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col md:flex-row justify-between p-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0 md:mr-4">
                        <div className="text-orange-500 text-4xl mb-4">
                            “
                        </div>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper
                        </p>
                        <div className="flex items-center">
                            <img alt="Sumi Akter" className="w-10 h-10 rounded-full mr-4" height="40"
                                src="https://storage.googleapis.com/a1aa/image/DuTL4JYjfRsdMB1ouwUf_AhUjWBSixLXhXgE6IPKsoY.jpg"
                                width="40" />
                            <div>
                                <p className="font-semibold">
                                    SUMI AKTER
                                </p>
                                <div className="flex text-yellow-500">
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="text-orange-500 text-4xl mb-4">
                            “
                        </div>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper
                        </p>
                        <div className="flex items-center">
                            <img alt="Mukti Biswas" className="w-10 h-10 rounded-full mr-4" height="40"
                                src="https://storage.googleapis.com/a1aa/image/Ik0j7efoo-0ccUAdaVTsboKchotNkr_LmJSQy7pzu5k.jpg"
                                width="40" />
                            <div>
                                <p className="font-semibold">
                                    MUKTI BISWAS
                                </p>
                                <div className="flex text-yellow-500">
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                    <i className="fas fa-star">
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Service 1: Nail Care */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 0c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nail Care</h3>
                        <p className="text-gray-600">
                            Risus auctor ligula tempus dolor vitae neque feugiat ligula suscipit and risus mauri
                        </p>
                    </div>

                    {/* Service 2: Nail Art */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0c1.66 0 3 1.34 3 3v3h-6v-3c0-1.66 1.34-3 3-3zm-6 0c-1.66 0-3 1.34-3 3v3h6v-3c0-1.66-1.34-3-3-3z">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nail Art</h3>
                        <p className="text-gray-600">
                            Risus auctor ligula tempus dolor vitae neque feugiat ligula suscipit and risus mauri
                        </p>
                    </div>

                    {/* Service 3: Add-Ons */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Add-Ons</h3>
                        <p className="text-gray-600">
                            Risus auctor ligula tempus dolor vitae neque feugiat ligula suscipit and risus mauri
                        </p>
                    </div>

                    {/* Service 4: Treatments */}
                    <div className="text-center">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4">
                                </path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Treatments</h3>
                        <p className="text-gray-600">
                            Risus auctor ligula tempus dolor vitae neque feugiat ligula suscipit and risus mauri
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div className="text-black" style={{ backgroundColor: '#f5f5dc' }}>
        <footer className="px-20 pt-10 ">
            <div
                className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex-1">
                    <div className="flex items-center mb-4">
                        <img alt="HairCutter logo" className="mr-2" height="50"
                            src="https://storage.googleapis.com/a1aa/image/nsDonQZpOC_iGqYaLLjOPci7TduirUJcttEx53cD3Z0.jpg"
                            width="50" />
                        <div>
                            <h1 className="text-2xl font-bold text-black">
                                HairCutter
                            </h1>
                            <p className="text-sm text-black">
                                BARBER SHOP
                            </p>
                        </div>
                    </div>
                    <p className="mb-4 text-black">
                        Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis tortor ex. Morbi cursus sed neque
                        quis dictum.
                    </p>
                    <div className="flex">
                        <input className="p-2 rounded-l bg-white text-black" placeholder="Enter Your Email address"
                            type="email" />
                        <button className="bg-orange-500 p-2 rounded-r">
                            <i className="fas fa-paper-plane text-white">
                            </i>
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-black">
                        USEFUL LINKS
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a className="hover:underline text-black" href="#">
                                Help
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline text-black" href="#">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline text-black" href="#">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline text-black" href="#">
                                Refunds &amp; Returns
                            </a>
                        </li>
                        <li>
                            <a className="hover:underline text-black" href="#">
                                Help &amp; FAQ's
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-black">
                        CONTACT US
                    </h2>
                    <p className="mb-2 text-black">
                        <span className="font-bold">
                            Phone:
                        </span>
                        +010 234 789234
                    </p>
                    <p className="mb-2 text-black">
                        <span className="font-bold">
                            Fax:
                        </span>
                        +010 435 579892
                    </p>
                    <p className="mb-2 text-black">
                        <span className="font-bold">
                            Email:
                        </span>
                        info@mustachea.com
                    </p>
                    <p className="mb-2 text-black">
                        1394 Argonne Street, New Castle, USA
                    </p>
                </div>
            </div>

        </footer>
        <div className="bg-gray-800 py-4 mt-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-white">
                    Copyright © 2025, Muskan Threading Powered by
                    <a className="text-orange-500 hover:underline" href="#">
                        Infinitygalactech
                    </a>
                </p>
            </div>
        </div>
    </div>
    </>
  );
}
