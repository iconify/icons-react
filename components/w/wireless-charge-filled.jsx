import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtndtcb_e.css';
import '../../css/b/bkt59acob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rtndtcb_e"/><path class="bkt59acob"/></g>`,
		"fallback": "reicon:wireless-charge-filled",
	});
}

export default Component;
