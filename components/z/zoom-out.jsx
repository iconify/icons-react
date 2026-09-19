import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h0ugno76y.css';
import '../../css/i/i0u2ubbtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="h0ugno76y"/><path class="i0u2ubbtx"/></g>`,
		"fallback": "icon-park-outline:zoom-out",
	});
}

export default Component;
