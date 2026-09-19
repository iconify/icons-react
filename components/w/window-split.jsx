import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a940_6bhy.css';
import '../../css/z/z64ix51pw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a940_6bhy"/><path class="z64ix51pw"/></g>`,
		"fallback": "bi:window-split",
	});
}

export default Component;
