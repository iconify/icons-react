import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mchwn7vmg.css';
import '../../css/r/ryyk47brv.css';
import '../../css/t/t0cxf3ofc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mchwn7vmg"/><path clip-rule="evenodd" class="ryyk47brv"/><path clip-rule="evenodd" class="t0cxf3ofc"/></g>`,
		"fallback": "streamline-flex-color:workspace-desk-flat",
	});
}

export default Component;
