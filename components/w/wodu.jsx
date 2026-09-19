import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znag0hb4m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znag0hb4m"/>`,
		"fallback": "fa-brands:wodu",
	});
}

export default Component;
