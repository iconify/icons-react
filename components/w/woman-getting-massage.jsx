import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhi0krbgq.css';
import '../../css/k/ktiey3bxj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhi0krbgq"/><path class="ktiey3bxj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-getting-massage",
	});
}

export default Component;
