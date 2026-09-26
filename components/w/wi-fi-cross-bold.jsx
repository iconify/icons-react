import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unklte81i.css';
import '../../css/u/uhqipab8n.css';
import '../../css/v/v8q09l-bp.css';
import '../../css/l/l13n5r-wd.css';
import '../../css/a/a8i6x4bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="unklte81i"/><path class="uhqipab8n"/><path class="v8q09l-bp"/><path class="l13n5r-wd"/><path class="a8i6x4bay"/></g>`,
		"fallback": "solar:wi-fi-cross-bold",
	});
}

export default Component;
