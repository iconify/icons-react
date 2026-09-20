import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqgef37ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqgef37ge"/>`,
		"fallback": "pixelarticons:window-frame",
	});
}

export default Component;
