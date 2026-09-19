import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc4vrv0rr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc4vrv0rr"/>`,
		"fallback": "fa7-solid:window-maximize",
	});
}

export default Component;
