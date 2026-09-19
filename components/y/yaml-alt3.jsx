import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouarm639k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouarm639k"/>`,
		"fallback": "file-icons:yaml-alt3",
	});
}

export default Component;
