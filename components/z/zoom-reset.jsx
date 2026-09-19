import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hom3-lb9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hom3-lb9t"/>`,
		"fallback": "carbon:zoom-reset",
	});
}

export default Component;
