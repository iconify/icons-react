import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u3i-esblo.css';
import '../../css/x/xlg6vbbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u3i-esblo"/><path class="xlg6vbbdi"/></g>`,
		"fallback": "coolicons:zodiac-virgo-duocolor-round",
	});
}

export default Component;
