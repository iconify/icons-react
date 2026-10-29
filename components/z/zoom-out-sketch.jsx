import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wnzp-ncyf.css';
import '../../css/x/x7annnbrx.css';
import '../../css/q/qktlr5byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wnzp-ncyf"/><path class="wm-k x7annnbrx"/><path class="qktlr5byx wm-a"/></g>`,
		"fallback": "withicons:zoom-out-sketch",
	});
}

export default Component;
