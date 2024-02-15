export default function ProductDetails({
	params,
}: {
	params: { productId: string };
}) {
	return <h1>Yo for {params.productId}</h1>;
}
