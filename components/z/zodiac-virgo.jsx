import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_v5ttqwr.css';
import '../../css/y/y0fl17bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j_v5ttqwr"/><path class="y0fl17bip"/></g>`,
		"fallback": "lucide:zodiac-virgo",
	});
}

export default Component;
