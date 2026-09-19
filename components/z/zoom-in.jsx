import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/n11jugb8i.css';
import '../../css/i/isixl1b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="n11jugb8i"/><path class="isixl1b8l"/></g>`,
		"fallback": "humbleicons:zoom-in",
	});
}

export default Component;
