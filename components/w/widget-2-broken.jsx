import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evib1nbfc.css';
import '../../css/i/iurcs7brt.css';
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
		"content": `<g class="ipq1z-bjh"><path class="evib1nbfc"/><path class="iurcs7brt"/><path class="lk2buz33l"/><path class="v382p5edm"/></g>`,
		"fallback": "solar:widget-2-broken",
	});
}

export default Component;
