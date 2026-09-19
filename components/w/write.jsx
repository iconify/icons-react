import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/twzes8bmx.css';
import '../../css/d/d0h37k-hr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="twzes8bmx"/><path class="d0h37k-hr"/></g>`,
		"fallback": "icon-park-outline:write",
	});
}

export default Component;
