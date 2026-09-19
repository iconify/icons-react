import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onf15_b7f.css';
import '../../css/s/s0r1bobkf.css';
import '../../css/p/povs420wf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="onf15_b7f"/><path class="s0r1bobkf"/><circle class="povs420wf"/></g>`,
		"fallback": "icon-park:wind-turbine",
	});
}

export default Component;
