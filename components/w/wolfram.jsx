import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfe1iwbdl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfe1iwbdl"/>`,
		"fallback": "file-icons:wolfram",
	});
}

export default Component;
