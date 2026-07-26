import React from "react";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router";

import HomeProductCard from "../components/HomeProductCard";

const featuredProducts = [
	{
		id: 1,
		name: "Wireless Headphones",
		category: "Electronics",
		price: "$79.99",
		image:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
	},

	{
		id: 2,
		name: "Running Shoes",
		category: "Sports",
		price: "$64.99",
		image:
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
	},

	{
		id: 3,
		name: "Smart Watch",
		category: "Electronics",
		price: "$129.99",
		image:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
	},

	{
		id: 4,
		name: "Desk Lamp",
		category: "Home & Living",
		price: "$32.00",
		image:
			"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
	},
];

const Home = () => {
	return (
		<main className='overflow-hidden'>
			<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid min-h-[620px] items-center lg:grid-cols-[0.95fr_1.05fr]'>
					{/* ================= LEFT ================= */}

					<div className='relative z-30 max-w-[620px]'>
						{/* Small Label */}

						<div className='mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/[0.04] px-4 py-2'>
							<Sparkles
								size={15}
								className='text-violet-400'
							/>

							<span className='text-sm text-zinc-300'>
								Simple shopping. Better choices.
							</span>
						</div>

						{/* Heading */}

						<h1 className='text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-100 sm:text-6xl xl:text-[68px]'>
							Everything you need.
							<span className='mt-2 block text-violet-400'>
								Nothing you don't.
							</span>
						</h1>

						{/* Description */}

						<p className='mt-7 max-w-[560px] text-base leading-7 text-zinc-500 sm:text-lg'>
							Discover everyday products across tech, fashion, home, sports, and
							more — curated for simple shopping.
						</p>

						{/* CTA */}

						<Link
							to='/shop'
							className='group mt-8 inline-flex items-center gap-4 rounded-xl bg-zinc-100 px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-xl shadow-violet-500/10 transition hover:bg-white'
						>
							<ShoppingBag size={18} />

							<span>Explore Shop</span>

							<span className='flex h-7 w-7 items-center justify-center rounded-full text-zinc-900'>
								<ArrowRight
									size={15}
									className='transition-transform duration-300 group-hover:translate-x-1'
								/>
							</span>
						</Link>
					</div>

					{/* ================= RIGHT SHOWCASE ================= */}

					<div className='relative h-[570px] w-full'>
						{/* ================= HEADPHONES ================= */}

						<div className='absolute left-[23%] top-[3%] z-20 rotate-[-5deg]'>
							<HomeProductCard product={featuredProducts[0]} />
						</div>

						{/* ================= RUNNING SHOES ================= */}

						<div className='absolute right-[8%] top-[8%] z-30 rotate-[7deg]'>
							<HomeProductCard product={featuredProducts[1]} />
						</div>

						{/* ================= SMART WATCH ================= */}

						<div className='absolute left-[25%] top-[52%] z-40 rotate-[8deg]'>
							<HomeProductCard product={featuredProducts[2]} />
						</div>

						{/* ================= DESK LAMP ================= */}

						<div className='absolute right-[9%] top-[54%] z-30 -rotate-6deg]'>
							<HomeProductCard product={featuredProducts[3]} />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
