import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e5ch1xbsf.css';
import '../../css/x/xwroc2b7n.css';
import '../../css/n/nw4278f5v.css';
import '../../css/j/ju4c6cbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e5ch1xbsf"/><path class="xwroc2b7n"/><path class="nw4278f5v"/><path class="ju4c6cbsj"/></g>`,
		"fallback": "hugeicons:yoga-02",
	});
}

export default Component;
