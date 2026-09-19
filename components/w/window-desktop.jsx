import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s577vrczu.css';
import '../../css/q/qf3ier63m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s577vrczu"/><path class="qf3ier63m"/></g>`,
		"fallback": "bi:window-desktop",
	});
}

export default Component;
