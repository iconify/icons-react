import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ery8s6lzy.css';
import '../../css/h/hyh-8iqii.css';
import '../../css/m/mbeh24brm.css';
import '../../css/u/uru88vgdy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ery8s6lzy"/><path class="hyh-8iqii"/><path class="mbeh24brm"/><path class="uru88vgdy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:wireless",
	});
}

export default Component;
