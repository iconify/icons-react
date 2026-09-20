import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cgf24obqk.css';
import '../../css/s/snwtwpbek.css';
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
		"content": `<g class="ipq1z-bjh"><path class="cgf24obqk"/><path class="snwtwpbek"/><path class="lk2buz33l"/><path class="v382p5edm"/></g>`,
		"fallback": "solar:widget-broken",
	});
}

export default Component;
