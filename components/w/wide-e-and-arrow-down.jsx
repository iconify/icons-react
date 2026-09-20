import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-vfj0b9p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-vfj0b9p"/>`,
		"fallback": "pinhead:wide-e-and-arrow-down",
	});
}

export default Component;
