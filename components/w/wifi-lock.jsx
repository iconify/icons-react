import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-q0c7bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-q0c7bee"/>`,
		"fallback": "noviair-light:wifi-lock",
	});
}

export default Component;
