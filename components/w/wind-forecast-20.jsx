import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g14_4pfmo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g14_4pfmo"/>`,
		"fallback": "energy-icons:wind-forecast-20",
	});
}

export default Component;
