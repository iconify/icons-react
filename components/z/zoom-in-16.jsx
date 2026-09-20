import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwxfhhz9b.css';
import '../../css/p/pxcxtbcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwxfhhz9b"/><path class="pxcxtbcog"/>`,
		"fallback": "octicon:zoom-in-16",
	});
}

export default Component;
