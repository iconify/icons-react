import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rtrl0bc1m.css';
import '../../css/o/on8zzebxx.css';
import '../../css/a/a_i48oy3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rtrl0bc1m"/><path class="on8zzebxx"/><path class="a_i48oy3h"/></g>`,
		"fallback": "solar:wireless-charge-line-duotone",
	});
}

export default Component;
