import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jpkvqkbvl.css';
import '../../css/c/ceitnjb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jpkvqkbvl"/><circle class="ceitnjb9j"/></g>`,
		"fallback": "lucide:zodiac-capricorn",
	});
}

export default Component;
