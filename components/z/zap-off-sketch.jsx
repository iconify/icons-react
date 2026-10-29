import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ei9be55ro.css';
import '../../css/k/kc3tbqb7h.css';
import '../../css/w/wgkyg6fmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ei9be55ro wm-k"/><path class="kc3tbqb7h wm-k"/><path class="wgkyg6fmx wm-s"/></g>`,
		"fallback": "withicons:zap-off-sketch",
	});
}

export default Component;
