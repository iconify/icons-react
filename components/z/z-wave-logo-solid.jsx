import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8qo-qb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u8qo-qb0d"/>`,
		"fallback": "streamline-logos:z-wave-logo-solid",
	});
}

export default Component;
