import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mriwaebth.css';
import '../../css/q/q2a0nbcka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mriwaebth"/><path class="q2a0nbcka"/>`,
		"fallback": "energy-icons:whiteboard-20",
	});
}

export default Component;
