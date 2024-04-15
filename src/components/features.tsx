import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "International accreditation",
    description:
      "You will be recognized as one of ours in countries outside Ghana",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Legal certificates.",
    description:
      "Our certificates are legal and legit and is accredited by the Ghana Highway Authority.",
    icon: LockClosedIcon,
  }
];

import React from "react"

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 -mb-[400px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Learn faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better appraoch
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You will be exposed to fantstic tutors who have years of consistent experience in driving and road activities. 
                We give you all you need to know before you jump on the road and explore.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/feature1.jpg"
            alt="Product screenshot"
            className="w-[48rem] h-2/3 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
