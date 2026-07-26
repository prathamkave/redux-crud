import React, { useEffect } from "react";
import { AlertCircle, LoaderCircle, PackageSearch } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const Shop = () => {
	const dispatch = useDispatch();

	const { products, status, error } = useSelector((state) => state.products);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts());
		}
	}, [dispatch, status]);

	return (
		<main className='mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
			{/* Header */}
			<section className='mb-10'>
				<div className='flex items-end justify-between gap-6'>
					<div>
						<p className='mb-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-400'>
							Nexora Store
						</p>

						<h1 className='text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl'>
							Explore our collection
						</h1>

						<p className='mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base'>
							From everyday essentials to things you didn't know you needed.
							Find something worth adding to your setup.
						</p>
					</div>
				</div>
			</section>

			{/* Loading */}
			{status === "loading" && (
				<div className='flex min-h-100 flex-col items-center justify-center'>
					<div className='flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/4'>
						<LoaderCircle
							size={22}
							className='animate-spin text-violet-400'
						/>
					</div>

					<p className='mt-4 text-sm text-zinc-400'>Loading products...</p>
				</div>
			)}

			{/* Error */}
			{status === "failed" && (
				<div className='flex min-h-100 flex-col items-center justify-center text-center'>
					<div className='flex h-12 w-12 items-center justify-center rounded-xl border border-red-400/10 bg-red-400/5'>
						<AlertCircle
							size={22}
							className='text-red-400'
						/>
					</div>

					<h2 className='mt-4 text-base font-semibold text-zinc-200'>
						Couldn't load products
					</h2>

					<p className='mt-2 max-w-md text-sm text-zinc-500'>
						{error || "Something went wrong while fetching products."}
					</p>

					<button
						type='button'
						onClick={() => dispatch(fetchProducts())}
						className='mt-5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/8'
					>
						Try again
					</button>
				</div>
			)}

			{/* Empty */}
			{status === "succeeded" && products.length === 0 && (
				<div className='flex min-h-100 flex-col items-center justify-center text-center'>
					<PackageSearch
						size={32}
						className='text-zinc-600'
					/>

					<h2 className='mt-4 text-base font-semibold text-zinc-200'>
						No products found
					</h2>

					<p className='mt-2 text-sm text-zinc-500'>
						There are currently no products available.
					</p>
				</div>
			)}

			{/* Products */}
			{status === "succeeded" && products.length > 0 && (
				<section>
					<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{products.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
							/>
						))}
					</div>
				</section>
			)}
		</main>
	);
};

export default Shop;
