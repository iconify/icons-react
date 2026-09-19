import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzt7ai2sn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzt7ai2sn"/>`,
		"fallback": "game-icons:xylophone",
	});
}

export default Component;
