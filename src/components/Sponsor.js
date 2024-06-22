import React from 'react'
import transistor from "../images/transistor.a1e38d49.svg";
import mirage from "../images/mirage.e12f40ad.svg";
import statamic from "../images/statamic.923101b6.svg";
import statickit from "../images/statickit.2e06fcea.svg";
import tuple from "../images/tuple.2f54ed03.svg";
import laravel from "../images/laravel.6faebf7c.svg"
export default function Sponsor() {
  return (
    <div>
           <section id="sponsors" aria-label="Sponsors" class="py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">Current sponsorships for our workshops and speakers.</h2>
                        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
                            <div className="flex items-center justify-center">
                                <img alt="transistor" loading="lazy" width="158" height="48" decoding="async" data-nimg="1" style={{color: "transparent"}} src={transistor} />
                            </div>
                            <div className="flex items-center justify-center">
                                <img alt="tuple" loading="lazy" width="105" height="48" decoding="async" data-nimg="1" style={{color: "transparent"}} src={tuple} />
                            </div>
                            <div className="flex items-center justify-center">
                                <img alt="static" loading="lazy" width="127" height="48" decoding="async" data-nimg="1" style={{color: "transparent"}} src={statickit} />
                            </div>
                            <div className="flex items-center justify-center">
                                <img alt="mirage" loading="lazy" width="138" height="48" decoding="async" data-nimg="1" style={{color: "transparent"}} src={mirage} />
                            </div>
                            <div className="flex items-center justify-center">
                                <img alt="laravel" loading="lazy" width="136" height="48" decoding="async" data-nimg="1" style={{color: "transparent"}} src={laravel} />
                            </div>
                            <div className="flex items-center justify-center">
                                <img alt="laravel" loading="lazy" width="147" height="48" decoding="async" data-nimg="1"style={{color: "transparent"}}src={statamic} />
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}
