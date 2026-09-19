import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmq0ucb6h.css';
import '../../css/e/eiq6_bomh.css';
import '../../css/z/zicbo7bwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gmq0ucb6h"/><path class="eiq6_bomh"/><path class="zicbo7bwd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-gesturing-no",
	});
}

export default Component;
