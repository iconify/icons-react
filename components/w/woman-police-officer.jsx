import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c4uv9zdqg.css';
import '../../css/g/gih5xobsq.css';
import '../../css/h/ho68_xb_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c4uv9zdqg"/><path class="gih5xobsq"/><path class="ho68_xb_k"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-police-officer",
	});
}

export default Component;
