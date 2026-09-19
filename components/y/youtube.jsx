import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi3op5bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi3op5bxq"/>`,
		"fallback": "griddy-icons:youtube",
	});
}

export default Component;
