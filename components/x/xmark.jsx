import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2b_8yxjd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2b_8yxjd"/>`,
		"fallback": "f7:xmark",
	});
}

export default Component;
