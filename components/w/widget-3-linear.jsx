import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdrg8fy2c.css';
import '../../css/q/qe1jwqbbj.css';
import '../../css/b/bwdd5rb7e.css';
import '../../css/d/d_-sftbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sdrg8fy2c"/><path class="qe1jwqbbj"/><path class="bwdd5rb7e"/><path class="d_-sftbvq"/></g>`,
		"fallback": "solar:widget-3-linear",
	});
}

export default Component;
