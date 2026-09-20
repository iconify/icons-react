import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo3he8bkq.css';
import '../../css/u/usm8m5btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wo3he8bkq"/><path class="usm8m5btb"/></g>`,
		"fallback": "keyline-icons:whole-word-duotone",
	});
}

export default Component;
