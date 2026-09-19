import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwy4dtkhf.css';
import '../../css/l/l8kl8krke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nwy4dtkhf"/><path class="l8kl8krke"/></g>`,
		"fallback": "hugeicons:webhook-off",
	});
}

export default Component;
