import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtl3advap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtl3advap"/>`,
		"fallback": "icon-park-outline:wind",
	});
}

export default Component;
