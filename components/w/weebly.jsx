import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l66vwzb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l66vwzb0m"/>`,
		"fallback": "fa6-brands:weebly",
	});
}

export default Component;
