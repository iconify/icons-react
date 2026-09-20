import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-fos52wr.css';
import '../../css/b/b0f63_jbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w-fos52wr"/><path class="b0f63_jbj"/></g>`,
		"fallback": "reicon:xmark-filled",
	});
}

export default Component;
