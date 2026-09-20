import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypm8dzbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yypm8dzbx"/>`,
		"fallback": "simple-icons:zsh",
	});
}

export default Component;
