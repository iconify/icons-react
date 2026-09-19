import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu9h76b6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu9h76b6u"/>`,
		"fallback": "fa6-regular:window-maximize",
	});
}

export default Component;
