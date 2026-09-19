import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlhlbkp3l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlhlbkp3l"/>`,
		"fallback": "dashicons:yes-alt",
	});
}

export default Component;
