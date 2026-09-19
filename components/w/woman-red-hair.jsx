import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz-vrfbbr.css';
import '../../css/l/lxgj4lb0m.css';
import '../../css/s/s13nlbcmv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz-vrfbbr"/><path class="lxgj4lb0m"/><path class="s13nlbcmv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-red-hair",
	});
}

export default Component;
