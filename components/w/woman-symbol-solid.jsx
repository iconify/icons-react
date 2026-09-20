import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5y1_cmmf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z5y1_cmmf"/>`,
		"fallback": "streamline:woman-symbol-solid",
	});
}

export default Component;
