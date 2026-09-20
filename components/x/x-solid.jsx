import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv2ni7q9g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dv2ni7q9g"/>`,
		"fallback": "teenyicons:x-solid",
	});
}

export default Component;
