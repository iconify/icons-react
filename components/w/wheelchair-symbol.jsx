import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n7s9mvb4w.css';
import '../../css/j/j-08lub9d.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n7s9mvb4w"/><path class="j-08lub9d"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:wheelchair-symbol",
	});
}

export default Component;
