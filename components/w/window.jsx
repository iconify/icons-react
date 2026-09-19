import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a940_6bhy.css';
import '../../css/v/v8w97cb7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a940_6bhy"/><path class="v8w97cb7r"/></g>`,
		"fallback": "bi:window",
	});
}

export default Component;
