import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs-mfvb0v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs-mfvb0v"/>`,
		"fallback": "energy-icons:wind-rose-20",
	});
}

export default Component;
