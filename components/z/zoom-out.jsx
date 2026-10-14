import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sim1uwq2p.css';
import '../../css/f/fop159nlm.css';
import '../../css/m/mofdx0msy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="sim1uwq2p"/><path class="fop159nlm"/><path class="mofdx0msy"/></g>`,
		"fallback": "matita:zoom-out",
	});
}

export default Component;
