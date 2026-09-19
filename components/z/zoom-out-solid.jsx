import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv3verbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mv3verbdb"/>`,
		"fallback": "basil:zoom-out-solid",
	});
}

export default Component;
