import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz7555nvh.css';
import '../../css/q/q4tdn3ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz7555nvh"/><path class="q4tdn3ben"/>`,
		"fallback": "boxicons:webcam-filled",
	});
}

export default Component;
