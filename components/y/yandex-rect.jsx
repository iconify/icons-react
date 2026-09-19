import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4ozfu2_y.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4ozfu2_y"/>`,
		"fallback": "brandico:yandex-rect",
	});
}

export default Component;
