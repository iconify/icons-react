import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_159j0r.css';

const viewBox = {"width":1534,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_159j0r"/>`,
		"fallback": "wi:wind-direction-sw",
	});
}

export default Component;
