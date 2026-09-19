import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv212v18f.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv212v18f"/>`,
		"fallback": "fontisto:wind",
	});
}

export default Component;
