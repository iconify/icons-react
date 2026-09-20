import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5rsijhuv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5rsijhuv"/>`,
		"fallback": "qlementine-icons:windows-close-16",
	});
}

export default Component;
