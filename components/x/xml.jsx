import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymiz41-qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymiz41-qh"/>`,
		"fallback": "simple-icons:xml",
	});
}

export default Component;
