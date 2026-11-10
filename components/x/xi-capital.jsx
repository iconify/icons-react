import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jh8eogz1k.css';
import '../../css/i/i_ldr-ufh.css';
import '../../css/i/isua9uh5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="jh8eogz1k"/><path class="i_ldr-ufh"/><path class="isua9uh5b"/></g>`,
		"fallback": "matita:xi-capital",
	});
}

export default Component;
