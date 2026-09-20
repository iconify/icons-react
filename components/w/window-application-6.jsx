import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tige7vbdh.css';
import '../../css/t/tqjc_0e-l.css';
import '../../css/b/bfhqjrb7j.css';
import '../../css/n/n6czc1env.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tige7vbdh"/><path class="tqjc_0e-l"/><path class="bfhqjrb7j"/><path class="n6czc1env"/></g>`,
		"fallback": "streamline-cyber-color:window-application-6",
	});
}

export default Component;
