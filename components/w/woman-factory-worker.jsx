import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8so7faom.css';
import '../../css/b/bjk1z5bsp.css';
import '../../css/l/l4miem7lt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8so7faom"/><path class="bjk1z5bsp"/><path class="l4miem7lt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-factory-worker",
	});
}

export default Component;
