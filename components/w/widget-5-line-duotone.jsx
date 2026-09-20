import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5um6lj1h.css';
import '../../css/d/drgun2b_o.css';
import '../../css/y/ynfoavvdq.css';
import '../../css/o/ok3e5hr6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l5um6lj1h"/><path class="drgun2b_o"/><path class="ynfoavvdq"/><path class="ok3e5hr6j"/></g>`,
		"fallback": "solar:widget-5-line-duotone",
	});
}

export default Component;
