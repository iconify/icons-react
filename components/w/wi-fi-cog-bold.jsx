import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/unklte81i.css';
import '../../css/u/uhqipab8n.css';
import '../../css/v/v8q09l-bp.css';
import '../../css/l/l3wbq4-pq.css';
import '../../css/a/a41bnebdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="unklte81i"/><path class="uhqipab8n"/><path class="v8q09l-bp"/><path clip-rule="evenodd" class="l3wbq4-pq"/><path class="a41bnebdk"/></g>`,
		"fallback": "solar:wi-fi-cog-bold",
	});
}

export default Component;
