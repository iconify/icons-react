import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a4vliqeko.css';
import '../../css/v/v-08u1b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a4vliqeko"/><path class="v-08u1b_g"/></g>`,
		"fallback": "solar:wineglass-broken",
	});
}

export default Component;
