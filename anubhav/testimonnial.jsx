import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
	{
		name: "Mrs. Kavita Ma'am",
		role: "Science Teacher, Saraswati Vidya Mandir",
		image: "https://placehold.co/128x128?text=Hello+world",
		quote:
			"Yaar, these Anubhav kits are too good! My students now actually enjoy coming to lab. Full marks from my side.",
	},
	{
		name: "Mr. Suresh Sir",
		role: "Maths Master, Govt. Boys School",
		image: "https://placehold.co/128x128?text=Hello+world",
		quote:
			"Earlier kids used to sleep in my class, now they are asking so many questions! Anubhav kit is real game changer, boss.",
	},
	{
		name: "Miss Priya ",
		role: "Computer Teacher, Little Flower School",
		image: "https://placehold.co/128x128?text=hello+world",
		quote:
			"With this kit, even weak students started showing interest. Sabko coding sikha diya, thanks to Anubhav!",
	},
	{
		name: "Mr. Ramesh Bhaiya",
		role: "Physics Sir, Shanti Niketan",
		image: "https://placehold.co/128x128?text=hello+world",
		quote:
			"Earlier theory only, now full practicals! Students are making robots and all, I am also learning with them. Mast hai!",
	},
];

export default function TestimonialSection() {
	const [index, setIndex] = useState(0);

	const getItemsToShow = () =>
		typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;

	const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

	useEffect(() => {
		const handleResize = () => setItemsToShow(getItemsToShow());
		window.addEventListener("resize", handleResize);

		const interval = setInterval(() => {
			setIndex((prev) => (prev + itemsToShow) % testimonials.length);
		}, 7000);

		return () => {
			clearInterval(interval);
			window.removeEventListener("resize", handleResize);
		};
	}, [itemsToShow]);

	const nextTestimonial = () => {
		setIndex((prev) => (prev + itemsToShow) % testimonials.length);
	};

	const prevTestimonial = () => {
		setIndex(
			(prev) => (prev - itemsToShow + testimonials.length) % testimonials.length
		);
	};

	const visibleTestimonials = [
		...testimonials,
		...testimonials,
	].slice(index, index + itemsToShow);

	return (
		<div className="bg-gray-100 py-24 flex items-center justify-center px-2 sm:px-6">
			<div className="relative w-full max-w-7xl mx-auto">
				{/* Heading */}
				<h2
					className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-['Montserrat'] text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-center mb-16 tracking-tight drop-shadow-lg"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					title="Back to Top"
				>
					Testimonials
				</h2>
				<AnimatePresence mode="wait">
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -40 }}
						transition={{ duration: 0.5 }}
						className={`grid grid-cols-1 ${
							itemsToShow === 3 ? "lg:grid-cols-3" : ""
						} gap-10`}
					>
						{visibleTestimonials.map((testimonial, i) => (
							<div
								key={i}
								className="relative bg-gray-100 rounded-3xl shadow-2xl text-center px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 border border-gray-200 flex flex-col items-center transition-all duration-300 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.06)] group"
							>
								{/* Decorative floating neutral orb */}
								<div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white/60 rounded-full blur-lg z-0"></div>
								{/* Avatar without ring or floating orb */}
								<div className="mb-6 mt-2 z-10">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
									/>
								</div>
								{/* Name */}
								<h3 className="text-xl sm:text-2xl font-bold text-[#FFA500] mb-1 font-['Montserrat']">
									{testimonial.name}
								</h3>
								{/* Role */}
								<p className="text-sm sm:text-base text-gray-500 mb-4 font-['Nunito_Sans']">
									{testimonial.role}
								</p>
								{/* Quote */}
								<p className="text-lg sm:text-xl text-gray-800 italic leading-relaxed relative z-10 font-['Inter']">
									“{testimonial.quote}”
								</p>
								{/* Orange gradient bar */}
								<div className="mt-8 w-14 h-1 rounded-full bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto group-hover:w-24 transition-all duration-500"></div>
							</div>
						))}
					</motion.div>
				</AnimatePresence>
            </div>
        </div>
    );
}
