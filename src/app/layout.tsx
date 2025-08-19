import { LayoutProps } from '@typings/base-types';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from './layout/header';

const geistSans = Poppins({
	subsets: ['latin-ext'],
	weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
	title: {
		template: '%s - Next Auth',
		default: 'Next Auth'
	},
	description: 'NextAuth with Auth0 for Task 1 - NextAuth'
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>
				<Header />

				{children}
			</body>
		</html>
	);
}
