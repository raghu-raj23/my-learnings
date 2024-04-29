import { Suspense } from "react";
import { Product } from "../components/product";
import { Review } from "../components/reviews";

export default function ProductDetail() {
	return (
		<div>
			<h1>Product Detail</h1>
			<Suspense fallback={<p>Loading...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading...</p>}>
				<Review />
			</Suspense>
		</div>
	);
}
