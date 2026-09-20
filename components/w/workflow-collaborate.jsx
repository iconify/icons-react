import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kezc_8b9v.css';
import '../../css/n/npbhfhc_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kezc_8b9v"/><path class="npbhfhc_o"/></g>`,
		"fallback": "streamline-freehand:workflow-collaborate",
	});
}

export default Component;
