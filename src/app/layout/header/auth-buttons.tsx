import { Button } from '@components/button';
import Link from 'next/link';
import React from 'react';

export const AuthButtons = () => {
	return (
		<Link href="/login" className="ml-28">
			<Button>Login</Button>
		</Link>
	);
};
