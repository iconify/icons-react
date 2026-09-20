import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_d03ssda.css';
import '../../css/l/ltz16o8uo.css';
import '../../css/j/jn8p1cftv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t_d03ssda"/><path class="ltz16o8uo"/><path class="jn8p1cftv"/></g>`,
		"fallback": "solar:webcam-bold-duotone",
	});
}

export default Component;
