import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk0nvjkfb.css';
import '../../css/b/brb0-ybwn.css';
import '../../css/t/t1w2kub5b.css';
import '../../css/x/xhqjmhb9z.css';
import '../../css/t/t91_21rtw.css';
import '../../css/s/sjrx_bbhs.css';
import '../../css/u/ub2zt-bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk0nvjkfb wm-shadow"/><path class="brb0-ybwn"/><path class="t1w2kub5b"/><path class="xhqjmhb9z"/><path class="t91_21rtw"/><path class="sjrx_bbhs"/><path class="ub2zt-bpk wm-shine"/></g>`,
		"fallback": "withicons-luxe:wifi",
	});
}

export default Component;
