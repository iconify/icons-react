import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znpaeob6n.css';
import '../../css/v/vxwwwzj8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znpaeob6n"/><path class="vxwwwzj8i"/></g>`,
		"fallback": "bi:webcam",
	});
}

export default Component;
