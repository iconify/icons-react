import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hear8yb0f.css';
import '../../css/j/j712tjf1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hear8yb0f"/><path class="j712tjf1u"/>`,
		"fallback": "energy-icons:wrap-text-48-bold",
	});
}

export default Component;
