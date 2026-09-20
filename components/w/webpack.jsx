import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtm0kz49x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtm0kz49x"/>`,
		"fallback": "simple-icons:webpack",
	});
}

export default Component;
