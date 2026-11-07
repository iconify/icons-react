import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iliiaq87p.css';
import '../../css/a/adt82-boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iliiaq87p"/><path clip-rule="evenodd" class="adt82-boi"/>`,
		"fallback": "solar:win-rar-outline",
	});
}

export default Component;
