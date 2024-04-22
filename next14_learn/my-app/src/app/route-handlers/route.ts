// Route handlers execute on server-side only and doesn't run on browser

import { headers } from "next/headers";

// If there are route handlers and component page.tsx, the route handler gets executed by default. Hence move route to api sub directory.

const persons = [
	{
		id: 1,
		name: "avba",
	},
	{
		id: 2,
		name: "asda",
	},
];

export async function GET() {
	return Response.json(persons);
}

export async function POST(request: Request) {
	const person = await request.json();
	const newPerson = {
		id: persons.length + 1,
		name: person.text,
	};
	persons.push(newPerson);
	return new Response(JSON.stringify(newPerson), {
		headers: {
			"Content-Type": "application/json",
		},
		status: 201,
	});
}
