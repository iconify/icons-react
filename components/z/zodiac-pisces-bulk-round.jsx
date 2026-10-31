import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/ws6dkqb6i.css';
import '../../css/r/rew2e7btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ws6dkqb6i"/><path class="rew2e7btj"/></g>`,
		"fallback": "coolicons:zodiac-pisces-bulk-round",
	});
}

export default Component;
