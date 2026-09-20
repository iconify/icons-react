import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8svl7bvc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8svl7bvc"/>`,
		"fallback": "teenyicons:wordpress-outline",
	});
}

export default Component;
