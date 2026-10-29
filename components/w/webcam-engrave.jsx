import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wl0rsxbyu.css';
import '../../css/j/j9k75pllc.css';
import '../../css/q/qfejs7boz.css';
import '../../css/o/ozjkdu0on.css';
import '../../css/h/h7focp4gr.css';
import '../../css/m/mijl8pg2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wl0rsxbyu wm-k"/><path class="j9k75pllc wm-a"/><path class="qfejs7boz wm-shadow"/><path class="ozjkdu0on wm-k"/><path class="h7focp4gr wm-a"/><path class="mijl8pg2w wm-a"/></g>`,
		"fallback": "withicons:webcam-engrave",
	});
}

export default Component;
