import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onndsh4cj.css';
import '../../css/d/du94n1byp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onndsh4cj"/><path class="du94n1byp"/>`,
		"fallback": "energy-icons:wind-blade-20-bold",
	});
}

export default Component;
