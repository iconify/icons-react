import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hpg1b6bfv.css';
import '../../css/g/gh9w_71xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hpg1b6bfv"/><path class="gh9w_71xg"/></g>`,
		"fallback": "hugeicons:youtube",
	});
}

export default Component;
