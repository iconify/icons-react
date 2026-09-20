import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3a08eaqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3a08eaqz"/>`,
		"fallback": "selfhst:yacreader",
	});
}

export default Component;
