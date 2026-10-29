import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evfgxub1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evfgxub1s"/>`,
		"fallback": "vadivam:wine",
	});
}

export default Component;
