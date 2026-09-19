import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdz8jibqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdz8jibqj"/>`,
		"fallback": "boxicons:workflow",
	});
}

export default Component;
