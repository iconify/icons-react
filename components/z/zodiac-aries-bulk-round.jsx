import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cttop4l8d.css';
import '../../css/w/wl1bpk9ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cttop4l8d"/><path class="wl1bpk9ni"/></g>`,
		"fallback": "coolicons:zodiac-aries-bulk-round",
	});
}

export default Component;
