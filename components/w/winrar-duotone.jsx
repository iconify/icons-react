import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wrg-mvb_e.css';
import '../../css/r/rx1jali2u.css';
import '../../css/v/v0x34cmzr.css';
import '../../css/u/umbptl6nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wrg-mvb_e"/><path class="rx1jali2u"/><path class="v0x34cmzr"/><path clip-rule="evenodd" class="umbptl6nc"/></g>`,
		"fallback": "reicon:winrar-duotone",
	});
}

export default Component;
