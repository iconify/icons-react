import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwertgbpv.css';
import '../../css/z/zm0nz4bxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jwertgbpv"/><path class="zm0nz4bxg"/></g>`,
		"fallback": "bi:webcam-fill",
	});
}

export default Component;
