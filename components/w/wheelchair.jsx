import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9xpk6bcd.css';
import '../../css/m/mz3zmux_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9xpk6bcd"/><path clip-rule="evenodd" class="mz3zmux_e"/></g>`,
		"fallback": "healthicons:wheelchair",
	});
}

export default Component;
