import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lsal2z6ms.css';
import '../../css/p/pl9ryw_1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lsal2z6ms"/><path class="pl9ryw_1u"/></g>`,
		"fallback": "keyline-icons:wind-turbine-fill",
	});
}

export default Component;
