import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_yipyb-q.css';
import '../../css/y/ylgk8tbzc.css';
import '../../css/v/v5qiw5-fn.css';
import '../../css/g/gfl53sb3x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_yipyb-q"/><path class="ylgk8tbzc"/><path class="v5qiw5-fn"/><path class="gfl53sb3x"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-astronaut",
	});
}

export default Component;
