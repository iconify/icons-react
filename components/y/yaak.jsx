import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzlfc2bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzlfc2bvu"/>`,
		"fallback": "thesvg-color:yaak",
	});
}

export default Component;
