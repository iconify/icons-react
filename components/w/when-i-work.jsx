import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkb3nuooz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkb3nuooz"/>`,
		"fallback": "cib:when-i-work",
	});
}

export default Component;
