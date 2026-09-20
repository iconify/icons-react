import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/p/pxvt114hy.css';
import '../../css/c/c8046fbzv.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/iem6_ei8g.css';
import '../../css/f/f4h9sgbbv.css';
import '../../css/z/z43r0hq8v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><circle class="pxvt114hy"/><path class="c8046fbzv"/></g><g class="brzn_0bpr"><circle class="iem6_ei8g"/><path class="f4h9sgbbv"/><path class="z43r0hq8v"/></g>`,
		"fallback": "openmoji:woman-kneeling",
	});
}

export default Component;
