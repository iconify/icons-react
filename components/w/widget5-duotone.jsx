import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yl-99j6_s.css';
import '../../css/p/p5oe1tsku.css';
import '../../css/x/xv_k-3mjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yl-99j6_s"/><path class="p5oe1tsku"/><path class="xv_k-3mjr"/></g>`,
		"fallback": "reicon:widget5-duotone",
	});
}

export default Component;
