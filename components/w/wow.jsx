import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abe4_nbce.css';
import '../../css/m/md_wqtycd.css';
import '../../css/y/yfs0kqb-c.css';
import '../../css/w/w6-q7vl-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="abe4_nbce"/><circle class="md_wqtycd"/><circle class="yfs0kqb-c"/><path class="w6-q7vl-y"/></g>`,
		"fallback": "lets-icons:wow",
	});
}

export default Component;
