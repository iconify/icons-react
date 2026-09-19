import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/enti7lbrg.css';
import '../../css/z/z-6bcd3te.css';
import '../../css/e/equmkibvp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="enti7lbrg"/><path class="z-6bcd3te"/><path clip-rule="evenodd" class="equmkibvp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-raising-hand",
	});
}

export default Component;
