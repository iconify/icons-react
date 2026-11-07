import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvlkclb-m.css';
import '../../css/q/qbcnl7b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvlkclb-m"/><path class="qbcnl7b4u"/>`,
		"fallback": "solar:wi-fi-low-outline",
	});
}

export default Component;
