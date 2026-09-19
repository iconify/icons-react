import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8gwyvh6o.css';
import '../../css/p/psjw6pf9x.css';
import '../../css/j/je752_f-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8gwyvh6o"/><path class="psjw6pf9x"/><path class="je752_f-d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-scientist",
	});
}

export default Component;
