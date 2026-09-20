import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueu0rgbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ueu0rgbbb"/>`,
		"fallback": "reicon:widget3-filled",
	});
}

export default Component;
