import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjtg70bll.css';
import '../../css/s/scs1-2r1b.css';
import '../../css/a/a5lgl1jmf.css';
import '../../css/j/jd9ch1tiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjtg70bll"/><path class="scs1-2r1b"/><path class="a5lgl1jmf"/><path class="jd9ch1tiv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-with-veil",
	});
}

export default Component;
