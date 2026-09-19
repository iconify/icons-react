import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g4v37ibjd.css';
import '../../css/s/sigrsacyc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g4v37ibjd"/><path class="sigrsacyc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:wood",
	});
}

export default Component;
