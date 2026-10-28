import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9h3x8vab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9h3x8vab"/>`,
		"fallback": "cbi:whatsapp",
	});
}

export default Component;
