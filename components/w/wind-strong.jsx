import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hw4usbbyk.css';
import '../../css/q/q-fr89b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hw4usbbyk"/><path class="q-fr89b5a"/></g>`,
		"fallback": "griddy-icons:wind-strong",
	});
}

export default Component;
