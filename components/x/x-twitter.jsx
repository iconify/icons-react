import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6_jc6bab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6_jc6bab"/>`,
		"fallback": "fa6-brands:x-twitter",
	});
}

export default Component;
