import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3alqhbqo.css';

const viewBox = {"width":154,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3alqhbqo"/>`,
		"fallback": "thesvg-color:wolt",
	});
}

export default Component;
