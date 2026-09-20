import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x_b7wvb_x.css';
import '../../css/z/zairv7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x_b7wvb_x"/><path class="zairv7b0m"/></g>`,
		"fallback": "reicon:widget4-duotone",
	});
}

export default Component;
