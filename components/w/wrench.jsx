import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shmi-5huw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shmi-5huw"/>`,
		"fallback": "fa-solid:wrench",
	});
}

export default Component;
