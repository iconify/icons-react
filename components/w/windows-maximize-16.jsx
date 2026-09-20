import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e44yg1zxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e44yg1zxq"/>`,
		"fallback": "qlementine-icons:windows-maximize-16",
	});
}

export default Component;
