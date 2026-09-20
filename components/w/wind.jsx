import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb0jcv6dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb0jcv6dp"/>`,
		"fallback": "meteor-icons:wind",
	});
}

export default Component;
