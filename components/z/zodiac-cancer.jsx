import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f6fu06mto.css';
import '../../css/m/m9rz3zbbf.css';
import '../../css/p/pow4bf5-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f6fu06mto"/><circle class="m9rz3zbbf"/><circle class="pow4bf5-z"/></g>`,
		"fallback": "lucide:zodiac-cancer",
	});
}

export default Component;
