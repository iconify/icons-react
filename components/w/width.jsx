import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlsucpw_f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlsucpw_f"/>`,
		"fallback": "radix-icons:width",
	});
}

export default Component;
