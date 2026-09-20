import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/q/qglqs3b2y.css';
import '../../css/e/e3xfre2cu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="qglqs3b2y"/><path class="e3xfre2cu"/></g>`,
		"fallback": "streamline-kameleon-color:wrench",
	});
}

export default Component;
