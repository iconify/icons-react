import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t-k3l8erb.css';
import '../../css/l/lz53-qbjq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t-k3l8erb"/><path class="lz53-qbjq"/></g>`,
		"fallback": "pullo:whistle-duotone",
	});
}

export default Component;
