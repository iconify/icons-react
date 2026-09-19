import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uj2mf-b4l.css';
import '../../css/b/bs_q0b_tr.css';
import '../../css/b/bivhugbxq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uj2mf-b4l"/><path class="bs_q0b_tr"/><path class="bivhugbxq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-elf",
	});
}

export default Component;
