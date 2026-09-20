import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fksazibln.css';
import '../../css/q/qe-q-eb0q.css';
import '../../css/e/e87rnnu0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fksazibln"/><path class="qe-q-eb0q"/><circle class="e87rnnu0f"/></g>`,
		"fallback": "proicons:wi-fi",
	});
}

export default Component;
