import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-tezjb2p.css';
import '../../css/d/d88hpjocj.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-tezjb2p"/><path class="d88hpjocj"/></g>`,
		"fallback": "pullo:x-circle-multiple-duotone",
	});
}

export default Component;
