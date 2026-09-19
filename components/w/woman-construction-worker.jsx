import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg_uw4bbt.css';
import '../../css/h/hl8kpsgmd.css';
import '../../css/w/wr7w3bc1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jg_uw4bbt"/><path class="hl8kpsgmd"/><path class="wr7w3bc1d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-construction-worker",
	});
}

export default Component;
