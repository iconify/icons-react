import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dhb0b5b7w.css';
import '../../css/b/by2h4_pqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dhb0b5b7w"/><path class="by2h4_pqz"/></g>`,
		"fallback": "coolicons:wind-turbine-duocolor-round",
	});
}

export default Component;
