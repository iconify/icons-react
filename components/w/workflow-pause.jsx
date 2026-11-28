import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryb1uac7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryb1uac7x"/>`,
		"fallback": "noviair-light:workflow-pause",
	});
}

export default Component;
