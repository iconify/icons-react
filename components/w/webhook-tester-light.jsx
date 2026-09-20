import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmxx6rzfe.css';
import '../../css/o/o53elobcl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmxx6rzfe"/><path class="o53elobcl"/>`,
		"fallback": "selfhst:webhook-tester-light",
	});
}

export default Component;
