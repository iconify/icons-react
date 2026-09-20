import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y76tssbey.css';
import '../../css/d/d9ylrtbcu.css';
import '../../css/g/glqqubo6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y76tssbey"/><path class="d9ylrtbcu"/><path class="glqqubo6g"/>`,
		"fallback": "qlementine-icons:window-lock-16",
	});
}

export default Component;
