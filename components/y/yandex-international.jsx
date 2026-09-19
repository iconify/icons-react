import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohl9o5bts.css';

const viewBox = {"width":13,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohl9o5bts"/>`,
		"fallback": "fontisto:yandex-international",
	});
}

export default Component;
