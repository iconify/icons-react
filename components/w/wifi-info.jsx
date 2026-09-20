import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dciw6mb9j.css';
import '../../css/g/gjd67cccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dciw6mb9j"/><path class="gjd67cccr"/></g>`,
		"fallback": "keyline-icons:wifi-info",
	});
}

export default Component;
