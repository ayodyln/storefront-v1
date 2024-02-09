export async function handle({ event, resolve }) {
	// this cookie would be set inside a login route
	// const session = event.cookies.get('session')

	// you can get the user data from a database
	// const user = await getUser(session)

	// this is passed to `event` inside server `load` functions
	// and passed to handlers inside `+page.ts`
	event.locals.user = 'Test';

	return resolve(event);
}
