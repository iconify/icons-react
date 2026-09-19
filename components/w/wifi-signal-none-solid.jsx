import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9n7pnb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i9n7pnb0o"/>`,
		"fallback": "iconoir:wifi-signal-none-solid",
	});
}

export default Component;
