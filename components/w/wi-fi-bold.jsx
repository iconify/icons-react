import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxp6cq_-c.css';
import '../../css/n/na5p85bhp.css';
import '../../css/b/botmvgb2j.css';
import '../../css/n/nxgn35i8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxp6cq_-c"/><path class="na5p85bhp"/><path class="botmvgb2j"/><path class="nxgn35i8k"/></g>`,
		"fallback": "solar:wi-fi-bold",
	});
}

export default Component;
