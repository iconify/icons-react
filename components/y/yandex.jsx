import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8_af5qa.css';

const viewBox = {"width":12,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8_af5qa"/>`,
		"fallback": "fontisto:yandex",
	});
}

export default Component;
