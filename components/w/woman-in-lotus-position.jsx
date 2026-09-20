import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/s/sgctswr3q.css';
import '../../css/n/n73lv7b2b.css';
import '../../css/z/zj2w8l-ev.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/ztg5wmoma.css';
import '../../css/c/ckog6aswp.css';
import '../../css/q/qij_0zblh.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="sgctswr3q"/><path class="n73lv7b2b"/><path class="zj2w8l-ev"/></g><g class="brzn_0bpr"><circle class="ztg5wmoma"/><path class="ckog6aswp"/><path class="qij_0zblh"/></g>`,
		"fallback": "openmoji:woman-in-lotus-position",
	});
}

export default Component;
