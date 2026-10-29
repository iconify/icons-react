import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9j_w3dor.css';
import '../../css/e/e7j7pdsuw.css';
import '../../css/t/todv8kb1o.css';
import '../../css/p/pjei-pbjt.css';
import '../../css/h/hxdn9gbth.css';
import '../../css/k/kl-gs9bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9j_w3dor wm-k"/><path class="e7j7pdsuw wm-k"/><path class="todv8kb1o wm-k"/><path class="pjei-pbjt wm-s"/><path class="hxdn9gbth wm-s"/><path class="kl-gs9bzp wm-s"/></g>`,
		"fallback": "withicons-anime:wifi-off",
	});
}

export default Component;
