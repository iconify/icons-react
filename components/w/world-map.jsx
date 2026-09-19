import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a170ynmch.css';
import '../../css/q/q9x9gxaal.css';
import '../../css/z/z7k5akbjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a170ynmch"/><path class="q9x9gxaal"/><path class="z7k5akbjt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:world-map",
	});
}

export default Component;
