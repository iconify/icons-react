import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrgmuk__m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrgmuk__m"/>`,
		"fallback": "uil:window-grid",
	});
}

export default Component;
