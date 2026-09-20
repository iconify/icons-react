import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo9rxccoo.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo9rxccoo"/>`,
		"fallback": "wi:wind-beaufort-5",
	});
}

export default Component;
