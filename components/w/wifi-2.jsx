import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzatnb48s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzatnb48s"/>`,
		"fallback": "bi:wifi-2",
	});
}

export default Component;
