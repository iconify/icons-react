import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt9skmbar.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt9skmbar"/>`,
		"fallback": "pinhead:wide-p-under-roof",
	});
}

export default Component;
