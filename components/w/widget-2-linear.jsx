import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdrg8fy2c.css';
import '../../css/q/qe1jwqbbj.css';
import '../../css/v/v_cqstqlr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdrg8fy2c"/><path class="qe1jwqbbj"/><path class="v_cqstqlr"/></g>`,
		"fallback": "solar:widget-2-linear",
	});
}

export default Component;
