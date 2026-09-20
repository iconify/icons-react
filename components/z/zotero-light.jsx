import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmdfelbju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmdfelbju"/>`,
		"fallback": "selfhst:zotero-light",
	});
}

export default Component;
