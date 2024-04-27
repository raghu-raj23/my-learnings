import {redirect} from "next/navigation"
import { headers } from "next/headers";
import { type NextRequest } from "next/server";

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

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } } // context has params
) {
	if(parseInt(params.id) > persons.length){
		redirect("/route-handlers")
	}
	const requestHeaders = new Headers(request.headers)
	console.log(requestHeaders.get("Content-Type"))
	const nextHeaders = headers();
	console.log(nextHeaders.get("Content-Type"))
	const searchParams = request.nextUrl.searchParams;
	const query = searchParams.get("query");
	console.log(request.nextUrl);
	const filteredPersons = query
		? persons.filter((person) => person.name.includes(query))
		: persons;
	return (filteredPersons.length ? Response.json(filteredPersons) : Response.json(
		persons.find((person) => person.id === parseInt(params.id))
	));
}

export async function PATCH(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const { text } = await request.json();
	const index = persons.findIndex(
		(person) => person.id === parseInt(params.id)
	);
	persons[index].name = text;
	return Response.json(persons[index]);
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } }
) {
	const index = persons.findIndex(
		(person) => person.id === parseInt(params.id)
	);

	return Response.json(persons.splice(index, 1));
}
