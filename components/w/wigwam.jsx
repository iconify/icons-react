import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2y0w75do.css';
import '../../css/c/cb_h66bqe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2y0w75do"/><path class="cb_h66bqe"/>`,
		"fallback": "selfhst:wigwam",
	});
}

export default Component;
