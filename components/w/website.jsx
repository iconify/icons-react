import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja0jd1bsq.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja0jd1bsq"/>`,
		"fallback": "whh:website",
	});
}

export default Component;
