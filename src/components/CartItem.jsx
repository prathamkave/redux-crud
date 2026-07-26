import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

import {
	decreaseQuantity,
	increaseQuantity,
	removeFromCart,
} from "../redux/cartSlice";

const CartItem = ({ product }) => {
	const dispatch = useDispatch();

	const productImage = product.images?.[0];

	return (
		<article className='flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl'>
			{/* Product Image */}
			<div className='h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-900 sm:h-28 sm:w-28'>
				<img
					src={productImage}
					alt={product.title}
					className='h-full w-full object-cover'
				/>
			</div>

			{/* Product Details */}
			<div className='flex min-w-0 flex-1 flex-col justify-between'>
				<div className='flex items-start justify-between gap-3'>
					<div className='min-w-0'>
						<p className='mb-1 text-[10px] font-medium uppercase tracking-[0.15em] text-violet-400'>
							{product.category?.name}
						</p>

						<h2 className='line-clamp-1 text-sm font-semibold text-zinc-100 sm:text-base'>
							{product.title}
						</h2>
					</div>

					<button
						type='button'
						onClick={() => dispatch(removeFromCart(product.id))}
						aria-label={`Remove ${product.title} from cart`}
						className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400 cursor-pointer'
					>
						<Trash2 size={16} />
					</button>
				</div>

				<div className='mt-3 flex items-center justify-between gap-3'>
					{/* Quantity */}
					<div className='flex items-center rounded-lg border border-white/10 bg-black/20'>
						<button
							type='button'
							onClick={() => dispatch(decreaseQuantity(product.id))}
							disabled={product.quantity === 1}
							aria-label='Decrease quantity'
							className='flex h-8 w-8 items-center justify-center text-zinc-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer'
						>
							<Minus size={13} />
						</button>

						<span className='flex h-8 min-w-8 items-center justify-center border-x border-white/10 px-2 text-xs font-semibold text-zinc-200'>
							{product.quantity}
						</span>

						<button
							type='button'
							onClick={() => dispatch(increaseQuantity(product.id))}
							aria-label='Increase quantity'
							className='flex h-8 w-8 items-center justify-center text-zinc-400 transition hover:text-white cursor-pointer'
						>
							<Plus size={13} />
						</button>
					</div>

					{/* Price */}
					<div className='text-right'>
						<p className='text-sm font-semibold text-zinc-100'>
							${(product.price * product.quantity).toFixed(2)}
						</p>

						{product.quantity > 1 && (
							<p className='mt-0.5 text-[10px] text-zinc-500'>
								${product.price.toFixed(2)} each
							</p>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

export default CartItem;
