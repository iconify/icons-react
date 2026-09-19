import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xdacq_bnt.css';
import '../../css/l/l4newbcia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xdacq_bnt"/><path class="l4newbcia"/></g>`,
		"fallback": "cryptocurrency-color:zel",
	});
}

export default Component;
