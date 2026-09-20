import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_v1athia.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_v1athia"/>`,
		"fallback": "la:yandex",
	});
}

export default Component;
