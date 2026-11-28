import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtb3trzmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtb3trzmc"/>`,
		"fallback": "noviair-light:zoom-in",
	});
}

export default Component;
