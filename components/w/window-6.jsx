import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/v5d6znb_q.css';
import '../../css/v/vpw-frb_b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="v5d6znb_q"/><path class="vpw-frb_b"/></g>`,
		"fallback": "marketeq:window-6",
	});
}

export default Component;
