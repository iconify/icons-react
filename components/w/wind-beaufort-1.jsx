import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9i96qbvt.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9i96qbvt"/>`,
		"fallback": "wi:wind-beaufort-1",
	});
}

export default Component;
