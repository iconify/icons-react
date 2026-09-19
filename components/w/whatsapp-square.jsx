import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hap7ambrd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hap7ambrd"/>`,
		"fallback": "fa-brands:whatsapp-square",
	});
}

export default Component;
