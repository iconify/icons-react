import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcfp8hirx.css';
import '../../css/d/deqw0i4qc.css';
import '../../css/c/clj6o8p1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcfp8hirx"/><path class="deqw0i4qc"/><path class="clj6o8p1e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-merpeople",
	});
}

export default Component;
