import { ComponentPropsWithoutRef, ElementType } from 'react';

type PolymorphicProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export const Container = <T extends ElementType = 'div'>({ as, className, ...props }: PolymorphicProps<T>) => {
	const Component = as || 'div';

	return <Component {...props} className={`container mx-auto ${className ? ` ${className}` : ''}`} />;
};
