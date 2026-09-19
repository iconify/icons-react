import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/belzigh4o.css';
import '../../css/k/ktbj5idbh.css';
import '../../css/g/gennyabnn.css';
import '../../css/k/k3cx2pb6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="belzigh4o"/><path class="ktbj5idbh"/><path class="gennyabnn"/><path class="k3cx2pb6d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-lifting-weights",
	});
}

export default Component;
