import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chs_xjbuj.css';
import '../../css/f/f9mnbfbtq.css';
import '../../css/b/b8os0f_-m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chs_xjbuj"/><path class="f9mnbfbtq"/><path class="b8os0f_-m"/></g>`,
		"fallback": "fluent-emoji-high-contrast:zzz",
	});
}

export default Component;
