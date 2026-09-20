import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxgd-b81d.css';
import '../../css/m/mxzgrlbhg.css';
import '../../css/f/frbtlhrdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxgd-b81d"/><path class="mxzgrlbhg"/><path class="frbtlhrdb"/>`,
		"fallback": "streamline-ultimate:wifi-laptop-bold",
	});
}

export default Component;
