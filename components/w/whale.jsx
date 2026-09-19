import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oilqcmb4r.css';
import '../../css/v/va0e6p25o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oilqcmb4r"/><path class="va0e6p25o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:whale",
	});
}

export default Component;
