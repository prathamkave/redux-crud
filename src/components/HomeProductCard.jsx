import React from "react";

const HomeProductCard = ({ product }) => {
	return (
		<div className='w-[180px] rounded-[22px] border border-white/15 bg-white/[0.06] p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:w-[195px]'>
			<div className='overflow-hidden rounded-[17px] bg-zinc-900'>
				<img
					src={product.image}
					alt={product.name}
					className='aspect-square w-full object-cover'
				/>
			</div>

			<div className='px-1.5 pb-1 pt-3'>
				<p className='text-[9px] font-medium uppercase tracking-[0.18em] text-violet-300/70'>
					{product.category}
				</p>

				<h3 className='mt-1 text-[13px] font-semibold text-white'>
					{product.name}
				</h3>

				<p className='mt-1 text-[11px] font-medium text-zinc-400'>
					{product.price}
				</p>
			</div>
		</div>
	);
};

export default HomeProductCard;
