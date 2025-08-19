import { Container } from '@components/container';
import React from 'react';

export default function MainPage() {
	return (
		<Container as="main" className="h-[calc(100dvh-3.5rem)] grid grid-cols-1 place-items-center">
			<div>
				<p className="text-2xl text-center text-violet-700 font-semibold">Main Page</p>
				<p className="text-center">You don't need to log in to view this main page.</p>
			</div>
		</Container>
	);
}
