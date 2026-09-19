import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg1-5rbnm.css';
import '../../css/i/i8-ig2bjx.css';
import '../../css/x/xm9hcq-cp.css';
import '../../css/y/yeyg09bzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg1-5rbnm"/><path class="i8-ig2bjx"/><path class="xm9hcq-cp"/><path class="yeyg09bzr"/>`,
		"fallback": "ion:xbox",
	});
}

export default Component;
