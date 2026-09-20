import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmv618byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmv618byy"/>`,
		"fallback": "uil:wifi",
	});
}

export default Component;
