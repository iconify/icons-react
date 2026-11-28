import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pttal_b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pttal_b1f"/>`,
		"fallback": "noviair-light:whale",
	});
}

export default Component;
