import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uswdmbucs.css';
import '../../css/k/ke3ciypru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uswdmbucs"/><path class="ke3ciypru"/></g>`,
		"fallback": "coolicons:zodiac-aquarius-bulk-round",
	});
}

export default Component;
