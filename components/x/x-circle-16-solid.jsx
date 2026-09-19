import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxr2-_brv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qxr2-_brv"/>`,
		"fallback": "heroicons:x-circle-16-solid",
	});
}

export default Component;
