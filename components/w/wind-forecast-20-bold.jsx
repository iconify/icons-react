import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3i7mufd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3i7mufd"/>`,
		"fallback": "energy-icons:wind-forecast-20-bold",
	});
}

export default Component;
