import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/p/pf1ifwbeb.css';
import '../../css/j/j0g72kb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v_cyp7bey"/><path class="pf1ifwbeb"/><path class="j0g72kb3h"/></g>`,
		"fallback": "solar:webcam-line-duotone",
	});
}

export default Component;
