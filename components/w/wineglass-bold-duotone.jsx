import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2n529b7c.css';
import '../../css/d/d363y7bqh.css';
import '../../css/g/gtfd-mlws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2n529b7c"/><path class="d363y7bqh"/><path class="gtfd-mlws"/>`,
		"fallback": "solar:wineglass-bold-duotone",
	});
}

export default Component;
