import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4fod_bxw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4fod_bxw"/>`,
		"fallback": "picon:xbox",
	});
}

export default Component;
