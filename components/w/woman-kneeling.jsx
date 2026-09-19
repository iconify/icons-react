import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owjrhcbax.css';
import '../../css/k/k2_iy9bvq.css';
import '../../css/y/y0wp3xbnn.css';
import '../../css/c/czpf2fbry.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="owjrhcbax"/><path class="k2_iy9bvq"/><path clip-rule="evenodd" class="y0wp3xbnn"/><path class="czpf2fbry"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-kneeling",
	});
}

export default Component;
