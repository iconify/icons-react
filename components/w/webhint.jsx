import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu6aho1hd.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu6aho1hd"/>`,
		"fallback": "material-icon-theme:webhint",
	});
}

export default Component;
