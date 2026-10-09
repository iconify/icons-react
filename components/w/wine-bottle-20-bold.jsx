import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olg41hbtg.css';
import '../../css/n/n795oxbwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olg41hbtg"/><path class="n795oxbwm"/>`,
		"fallback": "energy-icons:wine-bottle-20-bold",
	});
}

export default Component;
