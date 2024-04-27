export const dynamic = "force-dynamic"; // this forces to not cache and execute at every call

// Route handlers are by default cached while using GET

export async function GET() {
	return Response.json({
		time: new Date().toLocaleTimeString(),
	});
}
