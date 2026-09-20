import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b1r711bgn.css';
import '../../css/e/ey_h58dyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="b1r711bgn"/><path class="ey_h58dyg"/></g>`,
		"fallback": "streamline-plump:wrench-circle",
	});
}

export default Component;
