import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t57l3zbns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t57l3zbns"/>`,
		"fallback": "selfhst:zotero-dark",
	});
}

export default Component;
