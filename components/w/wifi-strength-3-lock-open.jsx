import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uibhzkyej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uibhzkyej"/>`,
		"fallback": "mdi:wifi-strength-3-lock-open",
	});
}

export default Component;
