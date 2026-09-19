import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r51k3lv5c.css';
import '../../css/v/v_3i9wmxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r51k3lv5c"/><path class="v_3i9wmxn"/>`,
		"fallback": "boxicons:windows-filled",
	});
}

export default Component;
