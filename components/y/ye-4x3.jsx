import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y5vgbcb_s.css';
import '../../css/i/ityvir0_j.css';
import '../../css/r/r38kscbse.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="y5vgbcb_s"/><path class="ityvir0_j"/><path class="r38kscbse"/></g>`,
		"fallback": "flag:ye-4x3",
	});
}

export default Component;
