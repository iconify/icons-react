import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hde-h8bnt.css';
import '../../css/p/ptpixbbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hde-h8bnt wm-k"/><path class="ptpixbbse wm-a"/></g>`,
		"fallback": "withicons:wrap-text-gloss",
	});
}

export default Component;
