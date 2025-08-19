type Props = string | string[] | undefined;

export type Params = {
	[key: string]: Props;
};

export type LayoutProps = Readonly<{
	params?: Promise<Params>;
	children: React.ReactNode;
}>;

export type PageProps = Readonly<{
	params: Promise<Params>;
	searchParams?: Promise<{ [key: string]: Props }>;
}>;

export type AwaitedPageProps = {
	[K in keyof PageProps]: Awaited<PageProps[K]>;
};
