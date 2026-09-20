import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_3d0-bbo.css';

const viewBox = {"width":383.2,"height":196.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_3d0-bbo"/>`,
		"fallback": "thesvg-color:whop-dark",
	});
}

export default Component;
