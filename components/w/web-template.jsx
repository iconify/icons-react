import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy_wbc1rc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy_wbc1rc"/>`,
		"fallback": "fluent-mdl2:web-template",
	});
}

export default Component;
