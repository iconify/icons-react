import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1feq7vei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1feq7vei"/>`,
		"fallback": "simple-icons:zdotai",
	});
}

export default Component;
