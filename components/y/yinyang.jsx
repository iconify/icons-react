import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtcyxwnol.css';
import '../../css/z/z4fyztq0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtcyxwnol"/><path clip-rule="evenodd" class="z4fyztq0w"/></g>`,
		"fallback": "gg:yinyang",
	});
}

export default Component;
