import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8vmmtt7r.css';
import '../../css/s/sy99kq9ei.css';
import '../../css/l/lu_-8lbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p8vmmtt7r"/><path class="sy99kq9ei"/><path clip-rule="evenodd" class="lu_-8lbgr"/></g>`,
		"fallback": "solar:window-frame-bold",
	});
}

export default Component;
