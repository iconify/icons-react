import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xknpqhb_d.css';
import '../../css/e/eu8dnzbii.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xknpqhb_d"/><path class="eu8dnzbii"/>`,
		"fallback": "thesvg-color:wenitor",
	});
}

export default Component;
