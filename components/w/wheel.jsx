import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9j6zc6wk.css';
import '../../css/r/rjlz1ycng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z9j6zc6wk"/><path class="rjlz1ycng"/></g>`,
		"fallback": "at-icons:wheel",
	});
}

export default Component;
