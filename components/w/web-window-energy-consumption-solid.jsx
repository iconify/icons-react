import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czc8w0x3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="czc8w0x3o"/>`,
		"fallback": "iconoir:web-window-energy-consumption-solid",
	});
}

export default Component;
