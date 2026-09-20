import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3jvbdb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3jvbdb-k"/>`,
		"fallback": "selfhst:xplicittrust-light",
	});
}

export default Component;
