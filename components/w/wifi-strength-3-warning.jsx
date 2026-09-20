import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxr0uizak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxr0uizak"/>`,
		"fallback": "mdi:wifi-strength-3-warning",
	});
}

export default Component;
