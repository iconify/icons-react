import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bla-e4b9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bla-e4b9k"/>`,
		"fallback": "selfhst:xxl-sports",
	});
}

export default Component;
