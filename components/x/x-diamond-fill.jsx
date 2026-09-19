import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7f9kgmpl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7f9kgmpl"/>`,
		"fallback": "bi:x-diamond-fill",
	});
}

export default Component;
