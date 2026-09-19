import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jvtjbnueh.css';
import '../../css/x/x61fplb0z.css';
import '../../css/y/y_5yw8bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jvtjbnueh"/><path class="x61fplb0z"/><path class="y_5yw8bps"/></g>`,
		"fallback": "hugeicons:x-variable-square",
	});
}

export default Component;
