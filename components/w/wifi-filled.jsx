import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ay8tbubjq.css';
import '../../css/s/sfu0pxbzr.css';
import '../../css/n/n5o__tdls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ay8tbubjq"/><path class="sfu0pxbzr"/><path class="n5o__tdls"/></g>`,
		"fallback": "reicon:wifi-filled",
	});
}

export default Component;
