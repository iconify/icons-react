import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqvs1ctqv.css';
import '../../css/r/rqpnbwxgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqvs1ctqv"/><path clip-rule="evenodd" class="rqpnbwxgn"/></g>`,
		"fallback": "healthicons:wheelchair-24px",
	});
}

export default Component;
