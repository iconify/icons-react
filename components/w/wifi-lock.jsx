import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kebpa1b2k.css';
import '../../css/e/ewe-8cyie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kebpa1b2k"/><rect class="ewe-8cyie"/></g>`,
		"fallback": "lucide:wifi-lock",
	});
}

export default Component;
