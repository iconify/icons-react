import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6u7_8bet.css';
import '../../css/c/con_q4m6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6u7_8bet"/><path class="con_q4m6a"/>`,
		"fallback": "energy-icons:wind-speed-48-bold",
	});
}

export default Component;
