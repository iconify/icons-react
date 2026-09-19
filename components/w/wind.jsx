import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bslj-5bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bslj-5bzj"/>`,
		"fallback": "humbleicons:wind",
	});
}

export default Component;
