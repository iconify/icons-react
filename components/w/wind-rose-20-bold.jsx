import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ons0b3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ons0b3z"/>`,
		"fallback": "energy-icons:wind-rose-20-bold",
	});
}

export default Component;
