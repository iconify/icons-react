import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbl_ijbzj.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbl_ijbzj"/>`,
		"fallback": "wi:wmo4680-55",
	});
}

export default Component;
