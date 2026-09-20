import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkwx14bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkwx14bxc"/>`,
		"fallback": "thesvg:y-combinator",
	});
}

export default Component;
