import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lpwa0rsqs.css';
import '../../css/s/s8kd46ybu.css';
import '../../css/e/ej7owyikv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lpwa0rsqs"/><path class="s8kd46ybu"/><path class="ej7owyikv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-farmer",
	});
}

export default Component;
