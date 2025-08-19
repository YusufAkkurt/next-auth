import { ComponentPropsWithRef, FC } from 'react';

type Props = ComponentPropsWithRef<'button'> &
	Partial<{
		variant: 'primary' | 'secondary';
		size: 'small' | 'normal' | 'large';
	}>;

export const Button: FC<Props> = ({ className, variant = 'primary', size = 'normal', ...props }) => {
	return (
		<button
			{...props}
			className={`rounded-md cursor-pointer border transition-colors ${size === 'small' ? 'px-3 h-8 text-sm font-normal' : size === 'normal' ? 'px-4 h-10 font-medium' : 'px-6 h-12 font-bold'} ${
				variant === 'primary' ? 'bg-violet-700 text-white border-violet-700 hover:bg-violet-800' : 'bg-zinc-100 text-black border-black hover:bg-zinc-200'
			} ${className ? ` ${className}` : ''}`}
		/>
	);
};
