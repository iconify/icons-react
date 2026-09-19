import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kga6obbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kga6obbuj"/>`,
		"fallback": "grommet-icons:wheelchair-active",
	});
}

export default Component;
