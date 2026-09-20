import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi-0scbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi-0scbdw"/>`,
		"fallback": "ri:zcool-fill",
	});
}

export default Component;
