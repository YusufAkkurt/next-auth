import React from 'react';
import { MenuItem } from './menu-item';

export const HeaderMenu = () => {
	return (
		<ul role="menu" className="flex items-center gap-0.5">
			<MenuItem link="/" text="Home" />
			<MenuItem link="/authorized" text="Authorized" />
			<MenuItem link="/unauthorized" text="Unauthorized" />
		</ul>
	);
};
