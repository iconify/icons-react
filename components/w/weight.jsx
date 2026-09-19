import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bukk-sy7a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bukk-sy7a"/>`,
		"fallback": "fa7-solid:weight",
	});
}

export default Component;
