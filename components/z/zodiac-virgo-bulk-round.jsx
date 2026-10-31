import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g2z9zqbnq.css';
import '../../css/y/yovqjqbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g2z9zqbnq"/><path class="yovqjqbny"/></g>`,
		"fallback": "coolicons:zodiac-virgo-bulk-round",
	});
}

export default Component;
