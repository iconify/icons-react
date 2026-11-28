import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj5y0bbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj5y0bbdz"/>`,
		"fallback": "noviair-light:window-alert",
	});
}

export default Component;
