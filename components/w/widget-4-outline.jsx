import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3beugbjl.css';
import '../../css/q/qwbpu091i.css';
import '../../css/a/aijn3wnky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t3beugbjl"/><path class="qwbpu091i"/><path class="aijn3wnky"/></g>`,
		"fallback": "solar:widget-4-outline",
	});
}

export default Component;
