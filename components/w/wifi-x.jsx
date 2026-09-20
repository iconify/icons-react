import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ddbpr9boz.css';
import '../../css/x/x92zbjgna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ddbpr9boz"/><path class="x92zbjgna"/></g>`,
		"fallback": "keyline-icons:wifi-x",
	});
}

export default Component;
