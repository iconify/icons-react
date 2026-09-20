import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tn5uicbds.css';
import '../../css/k/karb-ydfr.css';
import '../../css/h/hqrxg7n5t.css';
import '../../css/e/e21b_1vvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tn5uicbds"/><path class="karb-ydfr"/><path class="hqrxg7n5t"/><path class="e21b_1vvv"/></g>`,
		"fallback": "streamline-freehand:website-development-browser-source-code",
	});
}

export default Component;
