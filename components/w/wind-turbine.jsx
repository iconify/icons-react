import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh8yjs2_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh8yjs2_j"/>`,
		"fallback": "noviair-light:wind-turbine",
	});
}

export default Component;
