import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yihxc_bsn.css';
import '../../css/l/l4mcfwb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yihxc_bsn"/><path class="l4mcfwb6a"/></g>`,
		"fallback": "reicon:window-pointer-filled",
	});
}

export default Component;
