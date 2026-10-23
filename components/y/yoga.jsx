import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmrjxz-dg.css';
import '../../css/r/rq08sniyy.css';
import '../../css/d/d_sq0mbey.css';
import '../../css/k/kpkyq1w5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cmrjxz-dg"/><circle class="rq08sniyy"/><path class="d_sq0mbey"/><path class="kpkyq1w5n"/></g>`,
		"fallback": "andrsrxn:yoga",
	});
}

export default Component;
