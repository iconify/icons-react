import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlwmhzbqp.css';
import '../../css/y/y18rwvb5w.css';
import '../../css/q/q-bwpcfpu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlwmhzbqp"/><path class="y18rwvb5w"/><path class="q-bwpcfpu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-walking",
	});
}

export default Component;
