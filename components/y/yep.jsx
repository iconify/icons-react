import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1b0wqoc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1b0wqoc"/>`,
		"fallback": "icon-park-outline:yep",
	});
}

export default Component;
