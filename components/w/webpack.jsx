import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udoc8zboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udoc8zboy"/>`,
		"fallback": "proicons:webpack",
	});
}

export default Component;
