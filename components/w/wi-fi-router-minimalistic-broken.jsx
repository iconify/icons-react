import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wryq7qf1p.css';
import '../../css/g/g9iewmb7q.css';
import '../../css/r/roum1zb8y.css';
import '../../css/l/l0_9bj_zz.css';
import '../../css/t/ts8bjky0l.css';
import '../../css/l/ll0cv8o9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wryq7qf1p"/><path class="g9iewmb7q"/><path class="roum1zb8y"/><path class="l0_9bj_zz"/><path class="ts8bjky0l"/><path class="ll0cv8o9n"/></g>`,
		"fallback": "solar:wi-fi-router-minimalistic-broken",
	});
}

export default Component;
