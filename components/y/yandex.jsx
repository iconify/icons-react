import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk-idjbly.css';

const viewBox = {"width":580.641,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk-idjbly"/>`,
		"fallback": "brandico:yandex",
	});
}

export default Component;
