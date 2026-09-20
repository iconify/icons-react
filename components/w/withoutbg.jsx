import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6r-ysfqo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6r-ysfqo"/>`,
		"fallback": "selfhst:withoutbg",
	});
}

export default Component;
