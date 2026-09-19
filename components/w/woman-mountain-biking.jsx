import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glhe7bguv.css';
import '../../css/l/ll9vxuj4s.css';
import '../../css/j/jmhfz6b1g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glhe7bguv"/><path class="ll9vxuj4s"/><path class="jmhfz6b1g"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-mountain-biking",
	});
}

export default Component;
