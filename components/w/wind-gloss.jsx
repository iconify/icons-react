import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-45hewkj.css';
import '../../css/r/rsq1ex_ur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h-45hewkj wm-k"/><path class="rsq1ex_ur wm-a"/></g>`,
		"fallback": "withicons:wind-gloss",
	});
}

export default Component;
