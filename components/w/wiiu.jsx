import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3r3u6_tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3r3u6_tg"/>`,
		"fallback": "simple-icons:wiiu",
	});
}

export default Component;
