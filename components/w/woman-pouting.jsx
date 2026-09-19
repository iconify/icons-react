import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oefnjk4zl.css';
import '../../css/w/wfdf_i74f.css';
import '../../css/v/v2ozfsb-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oefnjk4zl"/><path class="wfdf_i74f"/><path class="v2ozfsb-w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-pouting",
	});
}

export default Component;
