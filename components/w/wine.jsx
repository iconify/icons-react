import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/i/ii2w94bmc.css';
import '../../css/u/ufglowt-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ii2w94bmc"/><path class="ufglowt-w"/></g>`,
		"fallback": "streamline-plump:wine",
	});
}

export default Component;
