import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4nl7-bdg.css';
import '../../css/l/ldhzjccqk.css';
import '../../css/z/zqtfx5bwq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4nl7-bdg"/><path class="ldhzjccqk"/><path class="zqtfx5bwq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-tipping-hand",
	});
}

export default Component;
