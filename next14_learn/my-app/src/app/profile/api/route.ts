import { redirect } from "next/navigation";
import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(
	request: NextRequest,
) {
    const theme = request.cookies.get("theme");
    console.log(theme)
    cookies().set("resultsPerPage", "20")
    console.log(cookies().get("resultsPerPage"))
	return new Response("<h1>Yoooo</h1>", {
		headers: {
			"Context-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	});
}
