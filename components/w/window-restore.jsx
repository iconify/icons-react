import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0ulpub6a.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0ulpub6a"/>`,
		"fallback": "fa7-regular:window-restore",
	});
}

export default Component;
