import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/aw7h4pbns.css';
import '../../css/q/q4vef2bkz.css';
import '../../css/x/xt16wcg7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="aw7h4pbns wm-k"/><path class="q4vef2bkz wm-shadow"/><path class="wm-k xt16wcg7u"/></g>`,
		"fallback": "withicons:zap-engrave",
	});
}

export default Component;
