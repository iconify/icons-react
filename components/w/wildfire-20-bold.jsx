import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyix3hqdx.css';
import '../../css/f/fqywsjpmm.css';
import '../../css/s/sv88clbwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyix3hqdx"/><path class="fqywsjpmm"/><path class="sv88clbwm"/>`,
		"fallback": "energy-icons:wildfire-20-bold",
	});
}

export default Component;
