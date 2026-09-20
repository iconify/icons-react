import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_ijwfodo.css';
import '../../css/y/y4oh6wi5r.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/cy-v-jjkp.css';
import '../../css/u/ucveffq8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_ijwfodo"/><path class="y4oh6wi5r"/><g class="mc2zb0bvp"><path class="cy-v-jjkp"/><path class="ucveffq8x"/></g></g>`,
		"fallback": "solar:widget-6-bold-duotone",
	});
}

export default Component;
