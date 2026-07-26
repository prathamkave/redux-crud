import React from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import {
	addToCart,
	decreaseQuantity,
	increaseQuantity,
} from "../redux/cartSlice";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const cartItem = useSelector((state) =>
		state.cart.items.find((item) => item.id === product.id),
	);

	const quantity = cartItem?.quantity ?? 0;

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleIncrease = () => {
		dispatch(increaseQuantity(product.id));
	};

	const handleDecrease = () => {
		dispatch(decreaseQuantity(product.id));
	};

	return (
		<article className='group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5 cursor-pointer'>
			{/* Product Image */}
			<div className='relative overflow-hidden rounded-xl bg-zinc-900'>
				<img
					src={product.images?.[0]}
					alt={product.title}
					className='aspect-square w-full object-cover transition duration-500 group-hover:scale-105'
				/>

				<span className='absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium capitalize text-zinc-300 backdrop-blur-md'>
					{product.category?.name}
				</span>
			</div>

			{/* Product Details */}
			<div className='px-1 pt-4'>
				<h2 className='line-clamp-1 text-sm font-semibold text-zinc-100'>
					{product.title}
				</h2>

				<p className='mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-zinc-500'>
					{product.description}
				</p>

				{/* Price + Cart */}
				<div className='mt-4 flex items-center justify-between gap-3'>
					<span className='text-lg font-semibold text-zinc-100'>
						${product.price}
					</span>

					{quantity === 0 ? (
						<button
							type='button'
							onClick={handleAddToCart}
							aria-label={`Add ${product.title} to cart`}
							className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-300 cursor-pointer'
						>
							<ShoppingCart size={16} />
						</button>
					) : (
						<div className='flex h-9 items-center overflow-hidden rounded-lg border border-white/10 bg-white/5'>
							<button
								type='button'
								onClick={handleDecrease}
								aria-label={`Decrease ${product.title} quantity`}
								className='flex h-full w-9 items-center justify-center text-zinc-400 transition hover:bg-white/6 hover:text-white cursor-pointer'
							>
								<Minus size={14} />
							</button>

							<span className='flex h-full min-w-8 items-center justify-center border-x border-white/10 px-2 text-xs font-semibold text-zinc-100'>
								{quantity}
							</span>

							<button
								type='button'
								onClick={handleIncrease}
								aria-label={`Increase ${product.title} quantity`}
								className='flex h-full w-9 items-center justify-center text-zinc-400 transition hover:bg-white/6 hover:text-white cursor-pointer'
							>
								<Plus size={14} />
							</button>
						</div>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProductCard;
