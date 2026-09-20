import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdf25j1lg.css';
import '../../css/x/xftns5b3n.css';
import '../../css/c/ca5q_qgrk.css';
import '../../css/x/x1v26obeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rdf25j1lg"/><path clip-rule="evenodd" class="xftns5b3n"/><path class="ca5q_qgrk"/><path class="x1v26obeg"/></g>`,
		"fallback": "reicon:widget2-duotone",
	});
}

export default Component;
