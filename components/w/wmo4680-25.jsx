import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbf869b7f.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbf869b7f"/>`,
		"fallback": "wi:wmo4680-25",
	});
}

export default Component;
