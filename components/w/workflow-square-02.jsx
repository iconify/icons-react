import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q0hhp-bbf.css';
import '../../css/o/ozpfckvvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q0hhp-bbf"/><path class="ozpfckvvf"/></g>`,
		"fallback": "hugeicons:workflow-square-02",
	});
}

export default Component;
