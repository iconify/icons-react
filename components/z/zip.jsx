import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak2v05c1j.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak2v05c1j"/>`,
		"fallback": "lineicons:zip",
	});
}

export default Component;
