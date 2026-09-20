import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1alsbkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1alsbkh"/>`,
		"fallback": "selfhst:xwiki-dark",
	});
}

export default Component;
