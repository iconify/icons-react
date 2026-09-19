import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6w26xm9q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6w26xm9q"/>`,
		"fallback": "fa7-brands:youtube",
	});
}

export default Component;
