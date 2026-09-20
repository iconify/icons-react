import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmp2yabmj.css';
import '../../css/r/rrznp_jum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmp2yabmj"/><path class="rrznp_jum"/></g>`,
		"fallback": "reicon:wifi",
	});
}

export default Component;
