import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t8xw_-buw.css';
import '../../css/n/nfz5_ccuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t8xw_-buw"/><path class="nfz5_ccuf"/></g>`,
		"fallback": "streamline-freehand:website-development-code-flowchart-1",
	});
}

export default Component;
