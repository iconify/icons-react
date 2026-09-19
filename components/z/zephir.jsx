import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zku74vjzq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zku74vjzq"/>`,
		"fallback": "file-icons:zephir",
	});
}

export default Component;
