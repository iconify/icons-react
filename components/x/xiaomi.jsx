import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri9w4fyml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri9w4fyml"/>`,
		"fallback": "thesvg-color:xiaomi",
	});
}

export default Component;
