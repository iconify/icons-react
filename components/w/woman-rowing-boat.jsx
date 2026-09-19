import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp2bgyiul.css';
import '../../css/k/kdmkmwbvk.css';
import '../../css/r/rq_2l7k5g.css';
import '../../css/j/jx8wicb2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vp2bgyiul"/><path class="kdmkmwbvk"/><path class="rq_2l7k5g"/><path class="jx8wicb2x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-rowing-boat",
	});
}

export default Component;
