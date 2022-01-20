const API: string = 'https://jsonplaceholder.typicode.com/todos';

export async function getToDo<T>(request: RequestInfo, count: number): Promise<T> {
	const response = await fetch(request);
	const body = await response.json();
	const filteredBody = body.filter(todo => todo.id <= count);
	filteredBody.forEach(todo => console.log(todo));
	return
}

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

await getToDo<Todo[]>(API, 10);
