import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clnygjb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clnygjb4x"/>`,
		"fallback": "selfhst:ziit-light",
	});
}

export default Component;
