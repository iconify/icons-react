import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pde-hjbub.css';
import '../../css/i/iukp7hf7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pde-hjbub"/><path class="iukp7hf7b"/></g>`,
		"fallback": "coolicons:zodiac-libra-duocolor-round",
	});
}

export default Component;
