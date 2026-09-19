import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecxavkbht.css';

const viewBox = {"width":840,"height":790};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecxavkbht"/>`,
		"fallback": "il:youtube",
	});
}

export default Component;
