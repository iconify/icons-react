import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4dcqhbsd.css';
import '../../css/s/s-ajraboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4dcqhbsd"/><path class="s-ajraboz"/>`,
		"fallback": "boxicons:wind-filled",
	});
}

export default Component;
