import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hivw57sbb.css';
import '../../css/m/mxsipmbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hivw57sbb"/><path class="mxsipmbsa"/></g>`,
		"fallback": "tabler:world-x",
	});
}

export default Component;
