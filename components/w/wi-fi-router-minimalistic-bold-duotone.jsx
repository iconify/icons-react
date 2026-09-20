import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ysclhbb2b.css';
import '../../css/i/i0bfp_vut.css';
import '../../css/b/bpmhux1_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="ysclhbb2b"/><path class="i0bfp_vut"/></g><path clip-rule="evenodd" class="bpmhux1_w"/></g>`,
		"fallback": "solar:wi-fi-router-minimalistic-bold-duotone",
	});
}

export default Component;
