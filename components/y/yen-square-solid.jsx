import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_93w0w3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_93w0w3a"/>`,
		"fallback": "iconoir:yen-square-solid",
	});
}

export default Component;
