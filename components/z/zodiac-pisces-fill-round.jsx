import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utk1-nb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utk1-nb4e"/>`,
		"fallback": "coolicons:zodiac-pisces-fill-round",
	});
}

export default Component;
