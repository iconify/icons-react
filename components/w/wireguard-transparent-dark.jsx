import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk0h4l9rx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk0h4l9rx"/>`,
		"fallback": "selfhst:wireguard-transparent-dark",
	});
}

export default Component;
