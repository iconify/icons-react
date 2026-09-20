import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvngxob_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvngxob_y"/>`,
		"fallback": "lucide:zodiac-scorpio",
	});
}

export default Component;
