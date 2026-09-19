import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2x2-mbpt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2x2-mbpt"/>`,
		"fallback": "icon-park-outline:women",
	});
}

export default Component;
