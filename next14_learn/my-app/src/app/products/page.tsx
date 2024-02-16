import Link from "next/link";

export default function ProductList() {
	return (
		<>
			<Link href="/">Home</Link>
			<h1>Products Lists</h1>
			<h2>
				<Link href="products/1">P1</Link>
			</h2>
			<h2>
				<Link href="products/2">P2</Link>
			</h2>
			<h2>
				<Link href="products/3" replace>
					P3
				</Link>
			</h2>
		</>
	);
}
