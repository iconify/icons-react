import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg0h9m8rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg0h9m8rt"/>`,
		"fallback": "iconaut:weight-tilde-solid",
	});
}

export default Component;
