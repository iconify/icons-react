import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/guewfbcxi.css';
import '../../css/d/d-psb1_4y.css';
import '../../css/r/rm9g1fb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="guewfbcxi"/><path clip-rule="evenodd" class="d-psb1_4y"/></g><path class="rm9g1fb9j"/></g>`,
		"fallback": "reicon:wheel-duotone",
	});
}

export default Component;
