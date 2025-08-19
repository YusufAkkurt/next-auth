import { Container } from '@components/container';
import Link from 'next/link';
import { HeaderMenu } from './menu';
import { getSession } from 'next-auth/react';
import { AuthButtons } from './auth-buttons';

export const Header = async () => {
	const session = await getSession();

	return (
		<header className="h-14 bg-zinc-50 shadow-sm sticky">
			<Container className="flex items-center h-full">
				<Link href="/" className="text-lg cursor-pointer">
					Next <span className="text-violet-700 font-semibold">Auth</span>
				</Link>

				<nav className="ml-auto">
					<HeaderMenu />
				</nav>
				
				<AuthButtons />
			</Container>
		</header>
	);
};
