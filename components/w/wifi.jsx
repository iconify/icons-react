import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrsk8i_6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrsk8i_6x"/>`,
		"fallback": "heroicons:wifi",
	});
}

export default Component;
