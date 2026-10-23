import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x52-kbbea.css';
import '../../css/u/um2qbccay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x52-kbbea"/><path class="um2qbccay"/></g>`,
		"fallback": "vadivam:zodiac-scorpio",
	});
}

export default Component;
