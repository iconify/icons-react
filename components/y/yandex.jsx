import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmh10nt-p.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmh10nt-p"/>`,
		"fallback": "fa6-brands:yandex",
	});
}

export default Component;
