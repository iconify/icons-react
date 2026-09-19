import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wpa24n4tx.css';
import '../../css/d/dziddb-mx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wpa24n4tx"/><path class="dziddb-mx"/></g>`,
		"fallback": "bi:window-fullscreen",
	});
}

export default Component;
