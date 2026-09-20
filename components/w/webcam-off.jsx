import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iu158ebfp.css';
import '../../css/c/c5n-du86s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iu158ebfp"/><path class="c5n-du86s"/></g>`,
		"fallback": "lucide:webcam-off",
	});
}

export default Component;
