import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a35do_bcy.css';
import '../../css/d/drorme3nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a35do_bcy"/><path class="drorme3nk"/></g>`,
		"fallback": "hugeicons:wind-power-02",
	});
}

export default Component;
