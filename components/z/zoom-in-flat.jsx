import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hj_ag5b-o.css';
import '../../css/e/e4_uwyb3m.css';
import '../../css/w/wr0qpfbjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hj_ag5b-o"/><path clip-rule="evenodd" class="e4_uwyb3m"/><path class="wr0qpfbjg"/></g>`,
		"fallback": "streamline-plump-color:zoom-in-flat",
	});
}

export default Component;
