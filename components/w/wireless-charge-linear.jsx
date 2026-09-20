import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rtrl0bc1m.css';
import '../../css/p/pq5xj2bli.css';
import '../../css/g/gjz7habrb.css';
import '../../css/z/zfjkdbb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rtrl0bc1m"/><path class="pq5xj2bli"/><path class="gjz7habrb"/><path class="zfjkdbb0j"/></g>`,
		"fallback": "solar:wireless-charge-linear",
	});
}

export default Component;
