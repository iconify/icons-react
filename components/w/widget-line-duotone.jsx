import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mj3osnb2a.css';
import '../../css/q/qu_g58izx.css';
import '../../css/l/lk2buz33l.css';
import '../../css/v/v382p5edm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mj3osnb2a"/><path class="qu_g58izx"/><path class="lk2buz33l"/><path class="v382p5edm"/></g>`,
		"fallback": "solar:widget-line-duotone",
	});
}

export default Component;
