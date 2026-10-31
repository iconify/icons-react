import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w2wcp2bjj.css';
import '../../css/z/zyhbq5bxd.css';
import '../../css/e/e4_oyor9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w2wcp2bjj wm-shadow"/><path class="wm-shadow zyhbq5bxd"/><path class="e4_oyor9t"/></g>`,
		"fallback": "withicons-brutal:wifi",
	});
}

export default Component;
