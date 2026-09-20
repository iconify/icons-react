import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvv3v5pfz.css';
import '../../css/o/oh3q4ebdx.css';
import '../../css/q/qdnm17w9y.css';
import '../../css/h/hbiqkm9hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dvv3v5pfz"/><path clip-rule="evenodd" class="oh3q4ebdx"/><path class="qdnm17w9y"/><path class="hbiqkm9hq"/></g>`,
		"fallback": "solar:widget-2-bold",
	});
}

export default Component;
