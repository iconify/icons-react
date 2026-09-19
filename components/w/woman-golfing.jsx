import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/reou0mbaa.css';
import '../../css/m/myqlk289b.css';
import '../../css/m/m2g1aq3zx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="reou0mbaa"/><path class="myqlk289b"/><path class="m2g1aq3zx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-golfing",
	});
}

export default Component;
