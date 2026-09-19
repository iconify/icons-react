import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya8v8tb_k.css';
import '../../css/p/p1ys4ub_t.css';
import '../../css/n/njw1v7spu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ya8v8tb_k"/><path class="p1ys4ub_t"/><path class="njw1v7spu"/></g>`,
		"fallback": "pepicons:wifi",
	});
}

export default Component;
