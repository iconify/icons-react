import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m7vy_ebxn.css';
import '../../css/s/slf7svyff.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="m7vy_ebxn"/><path class="slf7svyff"/></g>`,
		"fallback": "marketeq:window-5",
	});
}

export default Component;
