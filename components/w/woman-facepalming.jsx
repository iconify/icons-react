import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pod1i76rs.css';
import '../../css/o/o1_79_b4t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pod1i76rs"/><path class="o1_79_b4t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-facepalming",
	});
}

export default Component;
