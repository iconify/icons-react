import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/k/kva043bzk.css';
import '../../css/t/t26d7g3rg.css';
import '../../css/h/h16-ldbyu.css';
import '../../css/r/rtrl0bc1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v_cyp7bey"/><path class="kva043bzk"/><path class="t26d7g3rg"/><path class="h16-ldbyu"/><path class="rtrl0bc1m"/></g>`,
		"fallback": "solar:webcam-linear",
	});
}

export default Component;
