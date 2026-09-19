import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i2q87wbqk.css';
import '../../css/f/fqee-rp0p.css';
import '../../css/z/zl7eblc8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i2q87wbqk"/><path class="fqee-rp0p"/><path class="zl7eblc8z"/></g>`,
		"fallback": "fluent-emoji-high-contrast:x-ray",
	});
}

export default Component;
