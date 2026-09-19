import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfmueqmcb.css';
import '../../css/h/hv8lui_2c.css';
import '../../css/j/j24q5eiwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tfmueqmcb"/><path class="hv8lui_2c"/><path class="j24q5eiwk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-swimming",
	});
}

export default Component;
