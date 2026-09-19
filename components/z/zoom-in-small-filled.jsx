import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxum_g7ec.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxum_g7ec"/>`,
		"fallback": "dinkie-icons:zoom-in-small-filled",
	});
}

export default Component;
