import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g-l40rbfc.css';
import '../../css/n/nh0p6lbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g-l40rbfc"/><path class="nh0p6lbgd wm-a"/></g>`,
		"fallback": "withicons:wreath-solid",
	});
}

export default Component;
