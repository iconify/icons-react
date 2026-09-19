import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0vcw070c.css';
import '../../css/p/pdrla7blb.css';
import '../../css/m/muis69b4s.css';
import '../../css/t/t2nxnvbtj.css';
import '../../css/v/v68_z0ncc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0vcw070c"/><path class="pdrla7blb"/><path class="muis69b4s"/><path class="t2nxnvbtj"/><path class="v68_z0ncc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-juggling",
	});
}

export default Component;
