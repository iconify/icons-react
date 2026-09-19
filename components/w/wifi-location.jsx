import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d_9_i96hn.css';
import '../../css/q/q8aan8bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d_9_i96hn"/><path class="q8aan8bww"/></g>`,
		"fallback": "hugeicons:wifi-location",
	});
}

export default Component;
