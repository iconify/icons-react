import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k88q8qb5o.css';
import '../../css/o/o250bhbog.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k88q8qb5o"/><path class="o250bhbog"/>`,
		"fallback": "devicon-plain:yunohost",
	});
}

export default Component;
