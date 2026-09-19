import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v5qcs8bop.css';
import '../../css/l/lr18s1wgn.css';
import '../../css/d/dawcsab1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v5qcs8bop"/><path class="lr18s1wgn"/><path class="dawcsab1j"/></g>`,
		"fallback": "hugeicons:x-variable-circle",
	});
}

export default Component;
