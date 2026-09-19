import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2_fs0idi.css';

const viewBox = {"width":23,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2_fs0idi"/>`,
		"fallback": "et:wine",
	});
}

export default Component;
