import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pfet2sqes.css';
import '../../css/h/hwv0xmbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pfet2sqes"/><path class="hwv0xmbdb"/></g>`,
		"fallback": "streamline-freehand:website-development-build",
	});
}

export default Component;
