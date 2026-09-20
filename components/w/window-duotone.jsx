import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jc561_1qe.css';
import '../../css/o/oaxi8intw.css';
import '../../css/c/cb_6hfbcx.css';
import '../../css/a/advkribgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jc561_1qe"/><path class="oaxi8intw"/><path class="cb_6hfbcx"/><path class="advkribgl"/></g>`,
		"fallback": "reicon:window-duotone",
	});
}

export default Component;
