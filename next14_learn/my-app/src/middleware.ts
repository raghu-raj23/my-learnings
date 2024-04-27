import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	const thePreference = request.cookies.get("theme");
	if (!thePreference) {
		response.cookies.set("theme", "dark");
	}
    response.headers.set("custom-header", "custom-value")
	return response;
	// if (request.nextUrl.pathname === "/profile") {
	// 	return NextResponse.redirect(new URL("/blog", request.url));
	// }
	// return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
// 	matcher: "/profile",
// };
