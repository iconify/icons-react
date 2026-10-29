import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/og2nw9byw.css';
import '../../css/r/r1j16t-3x.css';
import '../../css/h/h6uu6tbsk.css';
import '../../css/z/z9s7t3ynl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="og2nw9byw wm-k"/><path class="r1j16t-3x wm-a"/><path class="h6uu6tbsk wm-k"/><path class="wm-a z9s7t3ynl"/></g>`,
		"fallback": "withicons:wind-sketch",
	});
}

export default Component;
