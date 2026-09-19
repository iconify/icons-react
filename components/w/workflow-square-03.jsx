import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bb_adyb-m.css';
import '../../css/a/aaz-7qwfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bb_adyb-m"/><path class="aaz-7qwfx"/></g>`,
		"fallback": "hugeicons:workflow-square-03",
	});
}

export default Component;
