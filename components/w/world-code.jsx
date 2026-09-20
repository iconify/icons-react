import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qbew2zmiw.css';
import '../../css/v/vl2mitbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qbew2zmiw"/><path class="vl2mitbaf"/></g>`,
		"fallback": "tabler:world-code",
	});
}

export default Component;
