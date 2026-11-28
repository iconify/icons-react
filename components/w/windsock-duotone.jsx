import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z9u5k-l6l.css';
import '../../css/o/oaw8gr5as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z9u5k-l6l"/><path class="oaw8gr5as primary"/></g>`,
		"fallback": "iconaut:windsock-duotone",
	});
}

export default Component;
