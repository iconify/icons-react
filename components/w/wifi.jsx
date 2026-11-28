import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdbfw3b6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdbfw3b6u"/>`,
		"fallback": "noviair:wifi",
	});
}

export default Component;
