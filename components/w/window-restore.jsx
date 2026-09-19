import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-xd5diqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-xd5diqc"/>`,
		"fallback": "fa6-regular:window-restore",
	});
}

export default Component;
