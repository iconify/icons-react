import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeyo1tnaj.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeyo1tnaj"/>`,
		"fallback": "tdesign:widget-filled",
	});
}

export default Component;
