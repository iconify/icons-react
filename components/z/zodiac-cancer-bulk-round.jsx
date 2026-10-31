import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p31dn-bmr.css';
import '../../css/h/huykblbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p31dn-bmr"/><path class="huykblbwc"/></g>`,
		"fallback": "coolicons:zodiac-cancer-bulk-round",
	});
}

export default Component;
