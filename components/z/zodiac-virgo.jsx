import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r-mnz9bdo.css';
import '../../css/j/ji42uljfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r-mnz9bdo"/><path class="ji42uljfw"/></g>`,
		"fallback": "tabler:zodiac-virgo",
	});
}

export default Component;
