import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/calikxa4h.css';
import '../../css/x/x0-okzs0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="calikxa4h"/><path class="x0-okzs0t"/></g>`,
		"fallback": "hugeicons:workflow-square-07",
	});
}

export default Component;
