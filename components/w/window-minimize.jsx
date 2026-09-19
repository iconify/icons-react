import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5a49bwv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn5a49bwv"/>`,
		"fallback": "fa7-regular:window-minimize",
	});
}

export default Component;
