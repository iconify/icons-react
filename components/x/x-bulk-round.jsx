import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhs610-0q.css';
import '../../css/x/xt3t0x6az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhs610-0q"/><path class="xt3t0x6az"/></g>`,
		"fallback": "coolicons:x-bulk-round",
	});
}

export default Component;
