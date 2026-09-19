import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owp543m0s.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owp543m0s"/>`,
		"fallback": "f7:wifi",
	});
}

export default Component;
