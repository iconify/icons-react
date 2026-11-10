import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvr62lb_w.css';
import '../../css/p/pdo-3moav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yvr62lb_w"/><path class="pdo-3moav"/></g>`,
		"fallback": "tabler:world-map-off",
	});
}

export default Component;
