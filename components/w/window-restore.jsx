import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixma8s7gr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixma8s7gr"/>`,
		"fallback": "fa6-solid:window-restore",
	});
}

export default Component;
