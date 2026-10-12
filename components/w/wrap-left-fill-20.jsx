import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apoais73k.css';
import '../../css/t/t5r6riq5p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apoais73k"/><path class="t5r6riq5p"/>`,
		"fallback": "garden:wrap-left-fill-20",
	});
}

export default Component;
