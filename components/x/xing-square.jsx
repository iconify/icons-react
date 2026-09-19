import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5ibdneby.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5ibdneby"/>`,
		"fallback": "fa:xing-square",
	});
}

export default Component;
