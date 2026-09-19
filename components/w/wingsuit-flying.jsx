import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/b/bsbfkackf.css';
import '../../css/b/bf_msp58c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="bsbfkackf"/><path class="bf_msp58c"/></g>`,
		"fallback": "icon-park-outline:wingsuit-flying",
	});
}

export default Component;
