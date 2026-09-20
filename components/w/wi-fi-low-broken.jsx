import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zj2p4py0y.css';
import '../../css/p/pn5tqtb4p.css';
import '../../css/i/iejxo-b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zj2p4py0y"/><path class="pn5tqtb4p"/><path class="iejxo-b0t"/></g>`,
		"fallback": "solar:wi-fi-low-broken",
	});
}

export default Component;
