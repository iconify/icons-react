import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kks44q3cb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kks44q3cb"/>`,
		"fallback": "teenyicons:x-small-outline",
	});
}

export default Component;
