import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k-t4pjbpp.css';
import '../../css/u/ut-j19_nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k-t4pjbpp"/><path class="ut-j19_nt"/></g>`,
		"fallback": "hugeicons:wifi-disconnected-02",
	});
}

export default Component;
