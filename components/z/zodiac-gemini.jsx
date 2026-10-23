import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p49j5yb8w.css';
import '../../css/r/raptmx4hw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p49j5yb8w"/><path class="raptmx4hw"/></g>`,
		"fallback": "vadivam:zodiac-gemini",
	});
}

export default Component;
