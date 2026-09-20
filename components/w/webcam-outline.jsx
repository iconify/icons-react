import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zwbvgkmqi.css';
import '../../css/d/diqh2cabn.css';
import '../../css/y/yytokuy6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zwbvgkmqi"/><path class="diqh2cabn"/><path clip-rule="evenodd" class="yytokuy6x"/></g>`,
		"fallback": "solar:webcam-outline",
	});
}

export default Component;
