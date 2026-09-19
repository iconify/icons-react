import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykxa_t03c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykxa_t03c"/>`,
		"fallback": "icon-park-outline:windows",
	});
}

export default Component;
