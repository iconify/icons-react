import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l5-s07h8c.css';
import '../../css/k/k7e4w6bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l5-s07h8c"/><path class="k7e4w6bwg"/></g>`,
		"fallback": "hugeicons:workout-battle-ropes",
	});
}

export default Component;
