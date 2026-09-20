import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m568nkhbc.css';

const viewBox = {"width":1538,"height":1535};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m568nkhbc"/>`,
		"fallback": "wi:wind-direction-s",
	});
}

export default Component;
