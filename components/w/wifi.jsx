import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tdau__i0a.css';
import '../../css/y/yn-57bboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tdau__i0a"/><circle class="yn-57bboo"/></g>`,
		"fallback": "akar-icons:wifi",
	});
}

export default Component;
