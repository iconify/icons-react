import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-hzlkblk.css';
import '../../css/u/urak06bsx.css';
import '../../css/b/bid5r0rff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m-hzlkblk"/><path class="urak06bsx"/><path class="bid5r0rff"/></g>`,
		"fallback": "solar:widget-4-bold-duotone",
	});
}

export default Component;
