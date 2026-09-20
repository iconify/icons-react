import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/e/e3al30b2d.css';
import '../../css/u/ubx-5dmjv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="e3al30b2d"/><path class="ubx-5dmjv"/></g>`,
		"fallback": "streamline-plump:zoom-in",
	});
}

export default Component;
