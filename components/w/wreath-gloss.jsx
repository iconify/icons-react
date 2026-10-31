import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h5g3hnbrk.css';
import '../../css/u/uvcxoxnpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h5g3hnbrk wm-k"/><path class="uvcxoxnpe wm-a"/></g>`,
		"fallback": "withicons:wreath-gloss",
	});
}

export default Component;
