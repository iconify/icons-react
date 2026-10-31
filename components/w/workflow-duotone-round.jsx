import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9cx_zbjg.css';
import '../../css/x/x2dpw3cdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9cx_zbjg"/><path class="x2dpw3cdh"/></g>`,
		"fallback": "coolicons:workflow-duotone-round",
	});
}

export default Component;
