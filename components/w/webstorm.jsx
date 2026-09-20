import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad1ojq5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mad1ojq5g"/>`,
		"fallback": "thesvg-color:webstorm",
	});
}

export default Component;
