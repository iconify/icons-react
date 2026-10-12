import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmrjxz-dg.css';
import '../../css/r/rq08sniyy.css';
import '../../css/v/vfvta4b8u.css';
import '../../css/n/n8bp42b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cmrjxz-dg"/><circle class="rq08sniyy"/><path class="vfvta4b8u"/><path class="n8bp42b7v"/></g>`,
		"fallback": "andrsrxn:yoga",
	});
}

export default Component;
