import React from "react";


export const Contact = () => {
    return (

        <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <h2 className="text-3xl font-bold sm:text-4xl">Get in Contact</h2>
                        <p class="mt-4 text-gray-600">
                            At Hospital, we understand that navigating the healthcare system can be overwhelming, 
                            which is why we are dedicated to providing compassionate support and guidance to our patients and their families every step of the way.
                            Thank you for choosing Hospital for your healthcare needs. We are honored to serve you and look forward 
                            to helping you achieve optimal health and wellness.
                        </p>

                        <div class="mt-8">
                            <a href="#" class="text-2xl font-bold text-teal-600"> +12-345-6789 </a>

                            <address class="mt-2 not-italic">12th Washington St. Near Walmart, CA 58517</address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 border">
                        <form action="#" class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Name</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Email</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                    />
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Phone</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label class="sr-only" for="message">Message</label>

                                <textarea
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                ></textarea>
                            </div>

                            <div class="mt-4">
                                <a
                                    href="#"
                                    class="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Send Message
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}