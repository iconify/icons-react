import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqiu6pb8w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqiu6pb8w"/>`,
		"fallback": "thesvg:yugabytedb",
	});
}

export default Component;
