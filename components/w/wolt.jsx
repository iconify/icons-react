import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_8xh-nb.css';

const viewBox = {"width":154,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_8xh-nb"/>`,
		"fallback": "thesvg:wolt",
	});
}

export default Component;
