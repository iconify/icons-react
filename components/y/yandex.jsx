import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_r8-tbko.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_r8-tbko"/>`,
		"fallback": "file-icons:yandex",
	});
}

export default Component;
