import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ng7d50t9d.css';
import '../../css/p/pzb--v43q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ng7d50t9d"/><path class="pzb--v43q"/></g>`,
		"fallback": "hugeicons:whatsapp",
	});
}

export default Component;
