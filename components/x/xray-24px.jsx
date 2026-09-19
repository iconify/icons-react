import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu_6dyb-q.css';
import '../../css/k/k65ownb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eu_6dyb-q"/><path clip-rule="evenodd" class="k65ownb_f"/></g>`,
		"fallback": "healthicons:xray-24px",
	});
}

export default Component;
