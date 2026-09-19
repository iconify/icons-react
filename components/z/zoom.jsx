import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rasy60bjj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rasy60bjj"/>`,
		"fallback": "icon-park-outline:zoom",
	});
}

export default Component;
