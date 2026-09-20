import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/norrpj21j.css';
import '../../css/s/szh19hpiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="norrpj21j"/><path class="szh19hpiz"/></g>`,
		"fallback": "keyline-icons:wrench-duotone",
	});
}

export default Component;
