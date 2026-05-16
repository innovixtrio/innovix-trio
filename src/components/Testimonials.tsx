import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  review: string;
};

const data: Testimonial[] = [
  {
    name: "Nivetha R",
    role: "CSE Student",
    review:
      "They explained every module clearly. Our project presentation went smoothly because of their support and structured guidance.",
  },
  {
    name: "Rahul M",
    role: "Startup Founder",
    review:
      "Very professional team. From idea to execution everything was handled properly and the process felt smooth and reliable.",
  },
  {
    name: "Sathish Kumar",
    role: "Project Team Lead",
    review:
      "Our mini project became a full product with their help. Clean coding, great support, and excellent technical guidance.",
  },
  {
    name: "Fathima A",
    role: "Final Year Student",
    review:
      "Affordable pricing and friendly support. Best choice for student projects.",
  },
  {
    name: "Arun Prakash",
    role: "IT Student",
    review:
      "Clean UI, proper structure and very helpful support throughout the project.",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    data[index % data.length],
    data[(index + 1) % data.length],
    data[(index + 2) % data.length],
  ];

  return (
    <section className="relative bg-[#f5f3ff] py-20 overflow-hidden">
      {/* Background circles */}
      <div className="absolute right-[-120px] top-[-120px] w-[420px] h-[420px] border border-purple-200 rounded-full opacity-40"></div>
      <div className="absolute right-[40px] top-[40px] w-[300px] h-[300px] border border-purple-300 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative text-center">
        
        {/* HEADING CENTER */}
        <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What our clients{" "}
          <span className="italic font-normal text-gray-700">said</span>
        </h2>

        {/* DOTS */}
        <div className="flex justify-center mt-8 mb-10 gap-3">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-purple-600 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCards.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-sm flex flex-col justify-between transition hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-purple-500 fill-purple-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6 text-[14px] text-center">
                {item.review}
              </p>

              {/* Footer */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-md px-3 py-2 text-xs">
                <p className="font-semibold">{item.name}</p>
                <p className="text-purple-200">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;