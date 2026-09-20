import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/me8evwb2s.css';
import '../../css/w/wdgizkbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="me8evwb2s"/><path class="wdgizkbfa"/></g>`,
		"fallback": "tabler:world-pin",
	});
}

export default Component;
