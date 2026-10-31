import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mm77c2znr.css';
import '../../css/v/v509mkb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mm77c2znr"/><path class="v509mkb1i"/></g>`,
		"fallback": "coolicons:zodiac-scorpio-duocolor-round",
	});
}

export default Component;
