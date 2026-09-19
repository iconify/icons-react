import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9hjnqb7l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9hjnqb7l"/>`,
		"fallback": "fa7-brands:wolf-pack-battalion",
	});
}

export default Component;
