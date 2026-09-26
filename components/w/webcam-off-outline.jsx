import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6yptrb_l.css';
import '../../css/v/vlmyf2b8p.css';
import '../../css/s/st8kcmusv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h6yptrb_l"/><path clip-rule="evenodd" class="vlmyf2b8p"/><path class="st8kcmusv"/></g>`,
		"fallback": "solar:webcam-off-outline",
	});
}

export default Component;
