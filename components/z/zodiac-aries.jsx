import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb8k3dbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb8k3dbcn"/>`,
		"fallback": "vadivam:zodiac-aries",
	});
}

export default Component;
