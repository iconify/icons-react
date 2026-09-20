import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eupnwwb3p.css';
import '../../css/d/dh28lk72a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eupnwwb3p"/><path class="dh28lk72a"/></g>`,
		"fallback": "keyline-icons:wifi-exclamation",
	});
}

export default Component;
