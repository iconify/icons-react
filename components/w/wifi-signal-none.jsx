import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td7gww7fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td7gww7fr"/>`,
		"fallback": "iconoir:wifi-signal-none",
	});
}

export default Component;
