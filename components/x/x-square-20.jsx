import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxp0_ibgn.css';
import '../../css/a/a3b5c4b5n.css';
import '../../css/f/fxwv4z8sc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxp0_ibgn"/><path class="a3b5c4b5n"/><path class="fxwv4z8sc"/>`,
		"fallback": "energy-icons:x-square-20",
	});
}

export default Component;
