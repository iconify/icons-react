import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-fuek2tg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-fuek2tg"/>`,
		"fallback": "selfhst:zed-light",
	});
}

export default Component;
