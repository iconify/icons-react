import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akk2_7fox.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akk2_7fox"/>`,
		"fallback": "bi:wikipedia",
	});
}

export default Component;
