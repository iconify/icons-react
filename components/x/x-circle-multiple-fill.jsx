import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogz__r_fh.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogz__r_fh"/>`,
		"fallback": "pullo:x-circle-multiple-fill",
	});
}

export default Component;
