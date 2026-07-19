"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full pt-4 md:pt-0 mb-10   bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-slate-900">
                Everything Your <span className="text-emerald-600">Best Friend</span> Needs
              </h1>
              <p className="max-w-[600px] text-slate-500 md:text-xl">
               Explore our collection of lovable Dogs, Cats, Birds, Rabbits, and Mice. Find the perfect companion to make your home happier.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
             <Link href={'/collection'}  className="border-emerald-600 text-emerald-50 font-bold px-4 py-2 rounded-lg bg-emerald-500">Explore</Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] aspect-square">
              <Image
                src="/assets/pet.png"
                alt="Happy pet"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}