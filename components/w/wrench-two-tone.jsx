import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nu6qh3bcr.css';
import '../../css/d/de5ojmegz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nu6qh3bcr"/><path class="de5ojmegz"/></g>`,
		"fallback": "keyline-icons:wrench-two-tone",
	});
}

export default Component;
