import React from "react";


export const Achievements = () => {
    return (
        <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by the Whole Country</h2>

                <p class="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                    provident impedit esse recusandae facere libero harum sequi.
                </p>
                </div>

                <div class="mt-8 sm:mt-12">
                    <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div class="flex flex-col rounded-lg bg-teal-50 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">R&D Costs</dt>

                        <dd class="text-4xl font-extrabold text-teal-600 md:text-5xl">$4.8m</dd>
                        </div>

                        <div class="flex flex-col rounded-lg bg-teal-50 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">Active Donors</dt>

                        <dd class="text-4xl font-extrabold text-teal-600 md:text-5xl">500k+</dd>
                        </div>

                        <div class="flex flex-col rounded-lg bg-teal-50 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">Emergency Service Stations</dt>

                        <dd class="text-4xl font-extrabold text-teal-600 md:text-5xl">86</dd>
                        </div>
                    </dl>
                </div>
            </div>
            </section>
    )
}