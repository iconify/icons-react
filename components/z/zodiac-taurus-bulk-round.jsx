import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asw7adygk.css';
import '../../css/b/bxgsmy3yp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="asw7adygk"/><path class="bxgsmy3yp"/></g>`,
		"fallback": "coolicons:zodiac-taurus-bulk-round",
	});
}

export default Component;
