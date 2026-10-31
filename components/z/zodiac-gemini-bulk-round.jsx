import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq9ieqbgu.css';
import '../../css/t/t97zy2bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wq9ieqbgu"/><path class="t97zy2bgd"/></g>`,
		"fallback": "coolicons:zodiac-gemini-bulk-round",
	});
}

export default Component;
