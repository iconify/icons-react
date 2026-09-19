import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruo5rub3h.css';
import '../../css/g/gwszt1jdi.css';
import '../../css/j/jr913_bbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ruo5rub3h"/><path class="gwszt1jdi"/><path class="jr913_bbk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-superhero",
	});
}

export default Component;
